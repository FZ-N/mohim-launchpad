import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Network, Heart, PlayCircle, Sparkles, Zap, Globe2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-interoperability.jpg';
import himssLogo from '@/assets/himss-logo.png';
import iheCatalystLogo from '@/assets/ihe-catalyst-logo.jpg';
import emramLogo from '@/assets/emram-logo.jpeg';

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: Network,
      title: "Global Interoperability Standards",
      description: "Comprehensive implementation of HL7 FHIR, IHE profiles, and the International Patient Summary (IPS) to enable secure, seamless data exchange across Morocco's healthcare ecosystem.",
      logos: [iheCatalystLogo],
      gradient: "from-primary to-secondary",
    },
    {
      icon: Shield,
      title: "Digital Trust, Security & EMRAM Maturity",
      description: "PKI-based digital trust, IHE security profiles, and rigorous HIMSS EMRAM assessments to advance EMR adoption maturity and ensure world-class standards.",
      logos: [himssLogo, emramLogo],
      gradient: "from-secondary to-accent",
    },
    {
      icon: Heart,
      title: "National & International Innovation Hub",
      description: "Morocco's premier platform for digital health innovation—connecting public institutions, hospitals, startups, and global partners through projectathons and sandboxes.",
      logos: [],
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Healthcare Interoperability" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/85 to-accent/80"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow animation-delay-200"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Badge */}
              <div className="animate-fade-in-up opacity-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('home.subtitle')}</span>
                </div>
              </div>
              
              {/* Main heading */}
              <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight">
                {t('home.title')}
              </h1>
              
              {/* Tagline */}
              <p className="animate-fade-in-up opacity-0 animation-delay-200 text-xl md:text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl">
                {t('home.tagline')}
              </p>
              
              {/* Description */}
              <p className="animate-fade-in-up opacity-0 animation-delay-300 text-lg text-white/75 max-w-2xl">
                {t('home.description')}
              </p>
              
              {/* CTAs */}
              <div className="animate-fade-in-up opacity-0 animation-delay-400 flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="group bg-white text-primary hover:bg-white/95 shadow-strong text-base px-8 py-6 rounded-xl font-semibold"
                  onClick={() => navigate('/technology')}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  {t('home.cta.sandbox')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base px-8 py-6 rounded-xl font-semibold"
                  onClick={() => navigate('/about')}
                >
                  <Globe2 className="w-5 h-5 mr-2" />
                  {t('home.cta.vision')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Video Teaser Section */}
      <section className="py-20 bg-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-5xl mx-auto group cursor-pointer"
            onClick={() => navigate('/about')}
          >
            <div className="mb-6 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                Discover the MOHIM Journey
              </h2>
              <p className="text-muted-foreground">Watch how we're transforming healthcare in Morocco</p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-strong hover:shadow-glow transition-shadow duration-500">
              <div className="aspect-video overflow-hidden bg-muted">
                <iframe
                  src="https://www.youtube.com/embed/-zk-hePIcO4?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=-zk-hePIcO4"
                  className="w-full h-full scale-110 pointer-events-none"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 group-hover:via-transparent transition-all duration-500" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/95 shadow-strong group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-10 h-10 text-primary ml-1" />
                </div>
                <span className="text-white font-medium text-lg opacity-90 group-hover:opacity-100 transition-opacity">
                  Watch the MOHIM story
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Pillars
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Building the Future of Healthcare
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three foundational pillars driving Morocco's digital health transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-card rounded-3xl border border-border p-8 hover-lift overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-medium`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="relative text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Logos */}
                {feature.logos.length > 0 && (
                  <div className="relative flex items-center gap-4 pt-6 border-t border-border">
                    {feature.logos.map((logo, logoIndex) => (
                      <img 
                        key={logoIndex}
                        src={logo} 
                        alt="Partner logo" 
                        className="h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" 
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Join the Digital Health Revolution
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Partner with MOHIM to shape the future of healthcare in Morocco and beyond.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="group bg-white text-primary hover:bg-white/95 shadow-strong text-lg px-10 py-7 rounded-xl font-semibold"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
