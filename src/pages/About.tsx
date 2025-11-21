import { useLanguage } from '@/contexts/LanguageContext';
import partnersAll from '@/assets/partners-all.png';

const About = () => {
  const { t } = useLanguage();

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

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <iframe
                src="https://www.youtube.com/embed/-zk-hePIcO4?autoplay=1&mute=1"
                className="w-full h-[450px]"
                title="MOHIM Video"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
              />
            </div>
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
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  FHIR
                </span>
                <span className="px-4 py-2 bg-trust/10 text-trust rounded-full text-sm font-medium">
                  IHE
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  HIMSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Our Partners
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Building Morocco&apos;s digital health ecosystem together
            </p>
            <div className="flex justify-center">
              <img 
                src={partnersAll} 
                alt="MOHIM Partners including CNSS, HIMSS, IHE Catalyst, Ministry of Health, and many healthcare technology companies"
                className="w-full max-w-5xl rounded-xl shadow-lg"
              />
            </div>
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
                and private stakeholders, MOHIM ensures that Morocco&apos;s digital health infrastructure 
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
