import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Users, Globe2, Award } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const partners = [
    { icon: Building2, name: 'Ministry of Health' },
    { icon: Globe2, name: 'WHO' },
    { icon: Users, name: 'Academic Institutions' },
    { icon: Award, name: 'Innovation Hubs' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust/10 via-background to-primary/5 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.mission')}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  FAIR
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  FHIR
                </span>
                <span className="px-4 py-2 bg-trust/10 text-trust rounded-full text-sm font-medium">
                  IHE
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                  WHO Smart Trust
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner, index) => {
                const Icon = partner.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {partner.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg">
              {t('about.partners')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Vision for the Future
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                MOHIM aims to position Morocco as a regional leader in digital health transformation, 
                fostering an ecosystem where innovation thrives and patient care is elevated through 
                secure, interoperable health information systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By aligning with global standards and creating a collaborative environment for public 
                and private stakeholders, MOHIM ensures that Morocco's digital health infrastructure 
                is prepared for the challenges and opportunities of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
