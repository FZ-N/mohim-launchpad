import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

interface PartnershipFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PartnershipForm = ({ open, onOpenChange }: PartnershipFormProps) => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Section 1: Personal Information
    fullName: '',
    jobTitle: '',
    organization: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    sector: '',
    sectorOther: '',
    
    // Section 2: Membership Type
    membershipType: '',
    
    // Section 3: Areas of Interest
    interestFHIR: false,
    interestEMRAM: false,
    interestGovernance: false,
    interestCyber: false,
    interestProjectathons: false,
    interestTraining: false,
    interestInnovation: false,
    interestOther: '',
    
    // Section 4: Desired Services
    serviceSandbox: false,
    serviceConformity: false,
    serviceCertification: false,
    serviceTraining: false,
    serviceAudit: false,
    serviceConsulting: false,
    
    // Section 5: Billing
    companyName: '',
    address: '',
    taxId: '',
    paymentMethod: '',
    
    // Section 6: Consent
    consentTerms: false,
    consentData: false,
    consentNewsletter: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consentTerms || !formData.consentData) {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' 
          ? 'Veuillez accepter les conditions requises' 
          : 'Please accept the required terms',
        variant: 'destructive',
      });
      return;
    }

    try {
      const res = await fetch('/api/mohim-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      toast({
        title: language === 'fr' ? 'Demande envoyée !' : 'Application Submitted!',
        description: language === 'fr'
          ? 'Merci pour votre demande d\'adhésion. Nous vous contacterons bientôt.'
          : 'Thank you for your partnership application. We will contact you soon.',
      });
      
      // Reset form
      setFormData({
        fullName: '',
        jobTitle: '',
        organization: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        sector: '',
        sectorOther: '',
        membershipType: '',
        interestFHIR: false,
        interestEMRAM: false,
        interestGovernance: false,
        interestCyber: false,
        interestProjectathons: false,
        interestTraining: false,
        interestInnovation: false,
        interestOther: '',
        serviceSandbox: false,
        serviceConformity: false,
        serviceCertification: false,
        serviceTraining: false,
        serviceAudit: false,
        serviceConsulting: false,
        companyName: '',
        address: '',
        taxId: '',
        paymentMethod: '',
        consentTerms: false,
        consentData: false,
        consentNewsletter: false,
      });
      
      onOpenChange(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr'
          ? 'Erreur lors de l\'envoi. Veuillez réessayer.'
          : 'Error submitting form. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold">
            {language === 'fr' ? 'Formulaire d\'Inscription – MOHIM' : 'MOHIM Registration Form'}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[calc(90vh-100px)] px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ... everything else stays exactly as you have it (sections 1–6) ... */}
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
