import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Building2, Mail, Phone, MapPin, Briefcase, CreditCard, CheckCircle2 } from "lucide-react";

const JoinUs = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    organization: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    sector: "",
    membershipType: "",
    areasOfInterest: [] as string[],
    desiredServices: [] as string[],
    companyName: "",
    billingAddress: "",
    billingCity: "",
    billingCountry: "",
    taxId: "",
    paymentMethod: "",
    termsConsent: false,
    dataPrivacyConsent: false,
    newsletterConsent: false,
  });

  const sectors = [
    "Hospital/Medical Center",
    "Health Center",
    "Startup/Publisher",
    "Administration",
    "Other"
  ];

  const membershipTypes = [
    { value: "individual-standard", label: "Individual Standard", price: "1,500 MAD/year" },
    { value: "individual-premium", label: "Individual Premium", price: "3,000 MAD/year" },
    { value: "company-small", label: "Company Small", price: "35,000 MAD/year" },
    { value: "company-medium", label: "Company Medium", price: "60,000 MAD/year" },
    { value: "company-large", label: "Company Large", price: "90,000 MAD/year" },
    { value: "public-institution", label: "Public Institution", price: "120,000 MAD/year" },
  ];

  const areasOfInterest = [
    "FHIR / IHE",
    "EMRAM",
    "Data Governance",
    "Cybersecurity",
    "Projectathons",
    "Training & Certification",
    "Innovation"
  ];

  const desiredServices = [
    "Sandbox MOHIM (FHIR R4 / IHE)",
    "API conformity / interoperability tests",
    "MOHIM Ready Certification",
    "Training (FHIR, IHE, EMRAM, cybersecurity)",
    "Audit",
    "Consulting"
  ];

  const paymentMethods = [
    "Bank Transfer",
    "Check",
    "Credit Card"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxArrayChange = (field: 'areasOfInterest' | 'desiredServices', value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsConsent || !formData.dataPrivacyConsent) {
      toast({
        title: "Consent Required",
        description: "Please accept the terms and data processing consent.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("partnership_applications").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        job_title: formData.jobTitle,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        country: formData.country,
        sector: formData.sector,
        membership_type: formData.membershipType,
        areas_of_interest: formData.areasOfInterest,
        desired_services: formData.desiredServices,
        company_name: formData.companyName,
        billing_address: formData.billingAddress,
        billing_city: formData.billingCity,
        billing_country: formData.billingCountry,
        tax_id: formData.taxId,
        payment_method: formData.paymentMethod,
        terms_consent: formData.termsConsent,
        data_privacy_consent: formData.dataPrivacyConsent,
        newsletter_consent: formData.newsletterConsent,
      });

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "Thank you for joining MOHIM. We will contact you shortly.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        organization: "",
        email: "",
        phone: "",
        city: "",
        country: "",
        sector: "",
        membershipType: "",
        areasOfInterest: [],
        desiredServices: [],
        companyName: "",
        billingAddress: "",
        billingCity: "",
        billingCountry: "",
        taxId: "",
        paymentMethod: "",
        termsConsent: false,
        dataPrivacyConsent: false,
        newsletterConsent: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Join Our Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              MOHIM Registration
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Become a member of Morocco Health Interoperability & Maturity Lab and accelerate your digital health journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Personal Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/50 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">1. Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization / Institution *</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Sector *</Label>
                  <RadioGroup
                    value={formData.sector}
                    onValueChange={(value) => handleInputChange("sector", value)}
                    className="flex flex-wrap gap-4 mt-2"
                  >
                    {sectors.map((sector) => (
                      <div key={sector} className="flex items-center space-x-2">
                        <RadioGroupItem value={sector} id={sector} />
                        <Label htmlFor={sector} className="cursor-pointer font-normal">{sector}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Section 2: Membership Type */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/50 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">2. Desired Membership Type</h2>
              </div>
              
              <RadioGroup
                value={formData.membershipType}
                onValueChange={(value) => handleInputChange("membershipType", value)}
                className="grid md:grid-cols-2 gap-4"
              >
                {membershipTypes.map((type) => (
                  <div 
                    key={type.value} 
                    className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      formData.membershipType === type.value 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border/50 hover:border-primary/30'
                    }`}
                  >
                    <RadioGroupItem value={type.value} id={type.value} />
                    <Label htmlFor={type.value} className="cursor-pointer flex-1">
                      <span className="font-medium">{type.label}</span>
                      <span className="text-primary font-semibold ml-2">– {type.price}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Section 3: Areas of Interest */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/50 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">3. Areas of Interest</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {areasOfInterest.map((area) => (
                  <div key={area} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Checkbox
                      id={`area-${area}`}
                      checked={formData.areasOfInterest.includes(area)}
                      onCheckedChange={(checked) => handleCheckboxArrayChange("areasOfInterest", area, checked as boolean)}
                    />
                    <Label htmlFor={`area-${area}`} className="cursor-pointer font-normal">{area}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Desired Services */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/50 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">4. Desired Services</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {desiredServices.map((service) => (
                  <div key={service} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Checkbox
                      id={`service-${service}`}
                      checked={formData.desiredServices.includes(service)}
                      onCheckedChange={(checked) => handleCheckboxArrayChange("desiredServices", service, checked as boolean)}
                    />
                    <Label htmlFor={`service-${service}`} className="cursor-pointer font-normal">{service}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Billing Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/50 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">5. Billing Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingAddress">Address *</Label>
                  <Input
                    id="billingAddress"
                    value={formData.billingAddress}
                    onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingCity">City *</Label>
                  <Input
                    id="billingCity"
                    value={formData.billingCity}
                    onChange={(e) => handleInputChange("billingCity", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingCountry">Country *</Label>
                  <Input
                    id="billingCountry"
                    value={formData.billingCountry}
                    onChange={(e) => handleInputChange("billingCountry", e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId">Tax ID</Label>
                  <Input
                    id="taxId"
                    value={formData.taxId}
                    onChange={(e) => handleInputChange("taxId", e.target.value)}
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => handleInputChange("paymentMethod", value)}
                    className="flex flex-wrap gap-4 mt-2"
                  >
                    {paymentMethods.map((method) => (
                      <div key={method} className="flex items-center space-x-2">
                        <RadioGroupItem value={method} id={method} />
                        <Label htmlFor={method} className="cursor-pointer font-normal">{method}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Section 6: Consent */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/50 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">6. Consent</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Checkbox
                    id="termsConsent"
                    checked={formData.termsConsent}
                    onCheckedChange={(checked) => handleInputChange("termsConsent", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="termsConsent" className="cursor-pointer font-normal">
                    I accept the terms and conditions *
                  </Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Checkbox
                    id="dataPrivacyConsent"
                    checked={formData.dataPrivacyConsent}
                    onCheckedChange={(checked) => handleInputChange("dataPrivacyConsent", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="dataPrivacyConsent" className="cursor-pointer font-normal">
                    I consent to the processing of my data *
                  </Label>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Checkbox
                    id="newsletterConsent"
                    checked={formData.newsletterConsent}
                    onCheckedChange={(checked) => handleInputChange("newsletterConsent", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="newsletterConsent" className="cursor-pointer font-normal">
                    I wish to receive the newsletter
                  </Label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Button 
                type="submit" 
                size="lg" 
                className="px-12 py-6 text-lg font-semibold shadow-glow hover:shadow-xl transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default JoinUs;
