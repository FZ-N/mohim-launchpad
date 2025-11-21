import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Lock, Network, FileText, Globe2, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Technology = () => {
  const { t } = useLanguage();

  const technologies = [
    {
      icon: Code,
      title: t('tech.sandbox'),
      description: 'A secure testing environment for validating interoperability solutions',
      color: 'primary',
    },
    {
      icon: Database,
      title: t('tech.data'),
      description: 'Standardized data principles for healthcare interoperability',
      color: 'secondary',
    },
    {
      icon: Lock,
      title: t('tech.pki'),
      description: 'Public Key Infrastructure for secure data exchange and authentication',
      color: 'trust',
    },
    {
      icon: FileText,
      title: t('tech.ips'),
      description: 'Standardized patient summaries for cross-border healthcare',
      color: 'accent',
    },
    {
      icon: Globe2,
      title: t('tech.interop'),
      description: 'Global Digital Health network connectivity',
      color: 'primary',
    },
    {
      icon: Network,
      title: 'FHIR & IHE Standards',
      description: 'Fast Healthcare Interoperability Resources and Integrating the Healthcare Enterprise',
      color: 'secondary',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust/10 via-background to-primary/5 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('tech.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('tech.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${tech.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${tech.color}/20 transition-colors`}>
                      <Icon className={`w-6 h-6 text-${tech.color}`} />
                    </div>
                    <CardTitle className="text-lg">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Architecture Overview
            </h2>
            
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="space-y-8">
                {/* Layer 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Data Collection Layer
                    </h3>
                    <p className="text-muted-foreground">
                      OpenMRS and other health information systems capture patient data at point of care, 
                      ensuring comprehensive medical records.
                    </p>
                  </div>
                </div>

                {/* Layer 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Interoperability Layer
                    </h3>
                    <p className="text-muted-foreground">
                      MOHIM's APIs transform data into standardized FHIR resources and IPS documents, 
                      enabling seamless exchange between systems.
                    </p>
                  </div>
                </div>

                {/* Layer 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-trust font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Security Layer
                    </h3>
                    <p className="text-muted-foreground">
                      PKI-based digital signatures with HIMSS and IHE standards ensure data integrity, 
                      authenticity, and patient privacy.
                    </p>
                  </div>
                </div>

                {/* Layer 4 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Global Exchange Layer
                    </h3>
                    <p className="text-muted-foreground">
                      Integration with global health networks enables secure cross-border health data exchange, 
                      supporting international care continuity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Test in the Sandbox?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join healthcare innovators, developers, and institutions in validating your 
              interoperability solutions within MOHIM's secure testing environment.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Request Sandbox Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
