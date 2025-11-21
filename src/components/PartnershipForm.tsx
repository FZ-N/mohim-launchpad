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
