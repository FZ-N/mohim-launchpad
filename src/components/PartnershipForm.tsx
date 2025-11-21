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
      const res = await fetch('/api/mohim_form', {
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
      console.error("Error submitting form:", error);
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
            {/* Section 1: Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {language === 'fr' ? '1. Informations personnelles' : '1. Personal Information'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">
                    {language === 'fr' ? 'Nom et prénom *' : 'Full Name *'}
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="jobTitle">
                    {language === 'fr' ? 'Fonction / Titre *' : 'Job Title *'}
                  </Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="organization">
                  {language === 'fr' ? 'Organisation / Institution *' : 'Organization / Institution *'}
                </Label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">
                    {language === 'fr' ? 'Téléphone *' : 'Phone *'}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">
                    {language === 'fr' ? 'Ville *' : 'City *'}
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="country">
                    {language === 'fr' ? 'Pays *' : 'Country *'}
                  </Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label>{language === 'fr' ? 'Secteur *' : 'Sector *'}</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {[
                    { value: 'hospital', label: language === 'fr' ? 'Hôpital/CHU' : 'Hospital/Medical Center' },
                    { value: 'health-center', label: language === 'fr' ? 'Centre de santé' : 'Health Center' },
                    { value: 'startup', label: language === 'fr' ? 'Startup/Éditeur' : 'Startup/Publisher' },
                    { value: 'administration', label: 'Administration' },
                  ].map((sector) => (
                    <div key={sector.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={sector.value}
                        checked={formData.sector === sector.value}
                        onCheckedChange={() => setFormData({ ...formData, sector: sector.value })}
                      />
                      <label htmlFor={sector.value} className="text-sm cursor-pointer">
                        {sector.label}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="other-sector"
                      checked={formData.sector === 'other'}
                      onCheckedChange={() => setFormData({ ...formData, sector: 'other' })}
                    />
                    <label htmlFor="other-sector" className="text-sm cursor-pointer">
                      {language === 'fr' ? 'Autre' : 'Other'}
                    </label>
                  </div>
                </div>
                {formData.sector === 'other' && (
                  <Input
                    className="mt-2"
                    placeholder={language === 'fr' ? 'Précisez...' : 'Please specify...'}
                    value={formData.sectorOther}
                    onChange={(e) => setFormData({ ...formData, sectorOther: e.target.value })}
                  />
                )}
              </div>
            </div>

            {/* Section 2: Membership Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {language === 'fr' ? '2. Type d\'adhésion souhaitée' : '2. Desired Membership Type'}
              </h3>
              
              <div className="space-y-3">
                {[
                  { value: 'individual-standard', label: language === 'fr' ? 'Individuelle Standard – 1 500 MAD/an' : 'Individual Standard – 1,500 MAD/year' },
                  { value: 'individual-premium', label: language === 'fr' ? 'Individuelle Premium – 3 000 MAD/an' : 'Individual Premium – 3,000 MAD/year' },
                  { value: 'company-small', label: language === 'fr' ? 'Entreprise Small – 35 000 MAD/an' : 'Company Small – 35,000 MAD/year' },
                  { value: 'company-medium', label: language === 'fr' ? 'Entreprise Medium – 60 000 MAD/an' : 'Company Medium – 60,000 MAD/year' },
                  { value: 'company-large', label: language === 'fr' ? 'Entreprise Large – 90 000 MAD/an' : 'Company Large – 90,000 MAD/year' },
                  { value: 'public-institution', label: language === 'fr' ? 'Institution publique – 120 000 MAD/an' : 'Public Institution – 120,000 MAD/year' },
                ].map((membership) => (
                  <div key={membership.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={membership.value}
                      checked={formData.membershipType === membership.value}
                      onCheckedChange={() => setFormData({ ...formData, membershipType: membership.value })}
                    />
                    <label htmlFor={membership.value} className="text-sm cursor-pointer">
                      {membership.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Areas of Interest */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {language === 'fr' ? '3. Domaines d\'intérêt' : '3. Areas of Interest'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-fhir"
                    checked={formData.interestFHIR}
                    onCheckedChange={(checked) => setFormData({ ...formData, interestFHIR: checked as boolean })}
                  />
                  <label htmlFor="interest-fhir" className="text-sm cursor-pointer">
                    FHIR / IHE
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-emram"
                    checked={formData.interestEMRAM}
                    onCheckedChange={(checked) => setFormData({ ...formData, interestEMRAM: checked as boolean })}
                  />
                  <label htmlFor="interest-emram" className="text-sm cursor-pointer">
                    EMRAM
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-governance"
                    checked={formData.interestGovernance}
                    onCheckedChange={(checked) => setFormData({ ...formData, interestGovernance: checked as boolean })}
                  />
                  <label htmlFor="interest-governance" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'Gouvernance data' : 'Data Governance'}
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-cyber"
                    checked={formData.interestCyber}
                    onCheckedChange={(checked) => setFormData({ ...formData, interestCyber: checked as boolean })}
                  />
                  <label htmlFor="interest-cyber" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'Cybersécurité' : 'Cybersecurity'}
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-projectathons"
                    checked={formData.interestProjectathons}
                    onCheckedChange={(checked) => setFormData({ ...formData, interestProjectathons: checked as boolean })}
                  />
                  <label htmlFor="interest-projectathons" className="text-sm cursor-pointer">
                    Projectathons
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-training"
                    checked={formData.interestTraining}
                    onCheckedChange={(checked) => setFormData({ ...formData, interestTraining: checked as boolean })}
                  />
                  <label htmlFor="interest-training" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'Formations & Certification' : 'Training & Certification'}
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-innovation"
                    checked={formData.interestInnovation}
                    onCheckedChange={(checked) => setFormData({ ...formData, interestInnovation: checked as boolean })}
                  />
                  <label htmlFor="interest-innovation" className="text-sm cursor-pointer">
                    Innovation
                  </label>
                </div>
              </div>
              
              <Input
                placeholder={language === 'fr' ? 'Autre (précisez)' : 'Other (please specify)'}
                value={formData.interestOther}
                onChange={(e) => setFormData({ ...formData, interestOther: e.target.value })}
              />
            </div>

            {/* Section 4: Desired Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {language === 'fr' ? '4. Services souhaités' : '4. Desired Services'}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="service-sandbox"
                    checked={formData.serviceSandbox}
                    onCheckedChange={(checked) => setFormData({ ...formData, serviceSandbox: checked as boolean })}
                  />
                  <label htmlFor="service-sandbox" className="text-sm cursor-pointer">
                    Sandbox MOHIM (FHIR R4 / IHE)
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="service-conformity"
                    checked={formData.serviceConformity}
                    onCheckedChange={(checked) => setFormData({ ...formData, serviceConformity: checked as boolean })}
                  />
                  <label htmlFor="service-conformity" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'Tests de conformité API / interopérabilité' : 'API conformity / interoperability tests'}
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="service-certification"
                    checked={formData.serviceCertification}
                    onCheckedChange={(checked) => setFormData({ ...formData, serviceCertification: checked as boolean })}
                  />
                  <label htmlFor="service-certification" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'Certification « MOHIM Ready »' : 'MOHIM Ready Certification'}
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="service-training"
                    checked={formData.serviceTraining}
                    onCheckedChange={(checked) => setFormData({ ...formData, serviceTraining: checked as boolean })}
                  />
                  <label htmlFor="service-training" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'Formations (FHIR, IHE, EMRAM, cybersécurité)' : 'Training (FHIR, IHE, EMRAM, cybersecurity)'}
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="service-audit"
                    checked={formData.serviceAudit}
                    onCheckedChange={(checked) => setFormData({ ...formData, serviceAudit: checked as boolean })}
                  />
                  <label htmlFor="service-audit" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'Audit EMRAM / accompagnement CHU' : 'EMRAM Audit / Medical Center Support'}
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="service-consulting"
                    checked={formData.serviceConsulting}
                    onCheckedChange={(checked) => setFormData({ ...formData, serviceConsulting: checked as boolean })}
                  />
                  <label htmlFor="service-consulting" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'AMOA / Conseil stratégique' : 'Strategic Consulting / Advisory'}
                  </label>
                </div>
              </div>
            </div>

            {/* Section 5: Billing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {language === 'fr' ? '5. Facturation' : '5. Billing'}
              </h3>
              
              <div>
                <Label htmlFor="companyName">
                  {language === 'fr' ? 'Raison sociale' : 'Company Name'}
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="address">
                  {language === 'fr' ? 'Adresse' : 'Address'}
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="taxId">
                  {language === 'fr' ? 'ICE / Identifiant fiscal' : 'Tax ID / ICE'}
                </Label>
                <Input
                  id="taxId"
                  value={formData.taxId}
                  onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                />
              </div>
              
              <div>
                <Label>{language === 'fr' ? 'Mode de paiement' : 'Payment Method'}</Label>
                <div className="space-y-2 mt-2">
                  {[
                    { value: 'transfer', label: language === 'fr' ? 'Virement' : 'Bank Transfer' },
                    { value: 'card', label: language === 'fr' ? 'Carte bancaire' : 'Credit Card' },
                    { value: 'order', label: language === 'fr' ? 'Ordre de mission' : 'Mission Order' },
                  ].map((method) => (
                    <div key={method.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={method.value}
                        checked={formData.paymentMethod === method.value}
                        onCheckedChange={() => setFormData({ ...formData, paymentMethod: method.value })}
                      />
                      <label htmlFor={method.value} className="text-sm cursor-pointer">
                        {method.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 6: Consent */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {language === 'fr' ? '6. Consentement' : '6. Consent'}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent-terms"
                    checked={formData.consentTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, consentTerms: checked as boolean })}
                    required
                  />
                  <label htmlFor="consent-terms" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'J\'accepte les conditions d\'adhésion MOHIM *' : 'I accept the MOHIM membership terms *'}
                  </label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent-data"
                    checked={formData.consentData}
                    onCheckedChange={(checked) => setFormData({ ...formData, consentData: checked as boolean })}
                    required
                  />
                  <label htmlFor="consent-data" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'J\'autorise le traitement de mes données (CNDP / GDPR) *' : 'I authorize the processing of my data (CNDP / GDPR) *'}
                  </label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent-newsletter"
                    checked={formData.consentNewsletter}
                    onCheckedChange={(checked) => setFormData({ ...formData, consentNewsletter: checked as boolean })}
                  />
                  <label htmlFor="consent-newsletter" className="text-sm cursor-pointer">
                    {language === 'fr' ? 'Je souhaite recevoir la newsletter MOHIM' : 'I would like to receive the MOHIM newsletter'}
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                {language === 'fr' ? 'Annuler' : 'Cancel'}
              </Button>
              <Button type="submit">
                {language === 'fr' ? 'Soumettre' : 'Submit'}
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
