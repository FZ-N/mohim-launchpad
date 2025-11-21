import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Network, Heart, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-interoperability.jpg';

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Healthcare Interoperability" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-background/80 to-secondary/90"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <Shield className="w-4 h-4" />
              <span>{t('home.subtitle')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight drop-shadow-lg">
              {t('home.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium drop-shadow-md">
              {t('home.tagline')}
            </p>
            
            <p className="text-lg text-primary/90 max-w-2xl mx-auto drop-shadow-md">
              {t('home.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90"
                onClick={() => navigate('/technology')}
              >
                {t('home.cta.sandbox')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => navigate('/about')}
              >
                {t('home.cta.vision')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Teaser Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-4xl mx-auto group cursor-pointer"
            onClick={() => navigate('/about')}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Discover the MOHIM Journey
              </h2>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Click to watch the full video on the About page
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              {/* Cropped video */}
              <div className="h-40 md:h-56 overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1aI0TWMh95UQmM7uhkMwJZUxxALVtcswP/preview"
                  className="w-full h-full scale-125 translate-y-[-10%] pointer-events-none"
                  allow="autoplay; fullscreen"
                />
              </div>

              {/* Dark overlay + play button */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 group-hover:bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <PlayCircle className="w-9 h-9 text-primary" />
                </div>
                <p className="text-sm md:text-base text-white/90 font-medium">
                  Watch the MOHIM story
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Interoperability Standards (HL7, IHE, IPS)
              </h3>
              <p className="text-muted-foreground">
                Design and implementation of HL7 FHIR, IHE profiles, and the International Patient Summary (IPS) to enable secure, interoperable data exchange and alignment with HIMSS interoperability maturity frameworks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Digital Trust, Security & Maturity
              </h3>
              <p className="text-muted-foreground">
                PKI-based security, IHE security and privacy profiles, and HIMSS EMRAM-aligned assessments ensure end-to-end data integrity, auditability, and patient privacy across the health ecosystem.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Collaborative Innovation Hub
              </h3>
              <p className="text-muted-foreground">
                A national and international innovation hub connecting public institutions, hospitals, startups, universities, and global partners (HIMSS, IHE, HL7) to co-design, test, and validate interoperable digital health solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Digital Health Revolution
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Partner with MOHIM to shape the future of healthcare in Morocco and beyond.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/contact')}
            className="group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
