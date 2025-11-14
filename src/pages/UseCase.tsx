import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MapPin, QrCode, CheckCircle } from 'lucide-react';

const UseCase = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MapPin,
      title: t('usecase.step1'),
      color: 'primary',
      location: 'Rabat, Morocco',
    },
    {
      icon: QrCode,
      title: t('usecase.step2'),
      color: 'secondary',
      location: 'International Access',
    },
    {
      icon: CheckCircle,
      title: t('usecase.step3'),
      color: 'accent',
      location: 'Return to Morocco',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 via-background to-accent/10 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('usecase.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              A real-world example of seamless international patient data exchange powered by MOHIM
            </p>
          </div>
        </div>
      </section>

      {/* Journey Flow */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Lines for Desktop */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const bgColor = `${step.color}/10`;
                  const textColor = step.color;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Step Card */}
                      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        {/* Icon */}
                        <div className={`w-16 h-16 bg-${bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto relative z-10`}>
                          <Icon className={`w-8 h-8 text-${textColor}`} />
                        </div>

                        {/* Step Number */}
                        <div className="text-center mb-4">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-muted text-muted-foreground rounded-full text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>

                        {/* Location Badge */}
                        <div className="text-center mb-4">
                          <span className={`inline-block px-3 py-1 bg-${bgColor} text-${textColor} rounded-full text-xs font-medium`}>
                            {step.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-center text-foreground font-medium leading-relaxed">
                          {step.title}
                        </p>
                      </div>

                      {/* Arrow for mobile */}
                      {index < steps.length - 1 && (
                        <div className="md:hidden flex justify-center my-4">
                          <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                The Technical Journey
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Step 1: Data Capture
                  </h3>
                  <p className="text-muted-foreground ml-5">
                    Patient visits a healthcare facility in Rabat where their medical data is recorded in OpenMRS. 
                    This information automatically synchronizes with MOHIM's FAIR API, creating a standardized 
                    International Patient Summary (IPS).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Step 2: Secure Access
                  </h3>
                  <p className="text-muted-foreground ml-5">
                    When the patient travels for Hajj, they carry a secure QR code containing their encrypted 
                    health summary. Healthcare providers in Mecca can instantly access this information through 
                    the WHO Smart Trust Global Digital Health Certification Network (GDHCN), ensuring continuity of care.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Step 3: Seamless Return
                  </h3>
                  <p className="text-muted-foreground ml-5">
                    Upon return to Morocco, any updates made to the patient's health record during their 
                    journey automatically synchronize back to the local system, maintaining a complete and 
                    up-to-date medical history without manual data entry or risk of information loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCase;
