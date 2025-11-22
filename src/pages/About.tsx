import { useLanguage } from '@/contexts/LanguageContext';
import partnersAll from '@/assets/partners-all.png';
import himssLogo from '@/assets/himss-logo.png';
import emramLogo from '@/assets/emram-logo.jpeg';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust/10 via-background to-primary/5 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">National Digital Health Transformation Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Advancing Morocco&apos;s Healthcare Through Global Standards and Collaborative Innovation
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MOHIM is Morocco&apos;s premier platform for achieving digital health interoperability, security, and maturity. 
              By aligning national efforts with internationally recognized frameworks—including HL7 FHIR, IHE profiles, 
              HIMSS EMRAM, and PKI-based digital trust—we empower healthcare stakeholders to build a resilient, 
              patient-centered digital ecosystem.
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
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Our Mission
                </h2>
                <p className="text-primary font-medium">Enabling Secure, Interoperable, and Mature Digital Health Systems</p>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                MOHIM serves as Morocco&apos;s national catalyst for digital health transformation, bridging policy, 
                technology, and care delivery. We design and implement standards-based solutions aligned with 
                <strong className="text-foreground"> HL7 FHIR</strong>, <strong className="text-foreground">IHE profiles</strong>, 
                and the <strong className="text-foreground">International Patient Summary (IPS)</strong>—ensuring seamless, 
                secure data exchange across hospitals, primary care, public health, and private sector platforms.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Through rigorous <strong className="text-foreground">HIMSS EMRAM assessments</strong> and 
                <strong className="text-foreground"> PKI-based digital trust frameworks</strong>, MOHIM evaluates and elevates 
                the maturity of healthcare information systems, guaranteeing end-to-end data integrity, auditability, 
                and patient privacy at every level.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20">
                  HL7 FHIR
                </span>
                <span className="px-4 py-2 bg-trust/10 text-trust rounded-full text-sm font-medium border border-trust/20">
                  IHE Profiles
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  HIMSS EMRAM
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                  Digital Trust & PKI
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20">
                  IPS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIMSS Partnership Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={himssLogo} 
                  alt="HIMSS - Healthcare Information and Management Systems Society"
                  className="w-64 mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Strategic Partnership with HIMSS
                </h2>
                <p className="text-primary font-medium mb-4">Global Leadership in Digital Health Transformation</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  HIMSS (Healthcare Information and Management Systems Society) is a global authority on digital health, 
                  trusted by governments and healthcare organizations worldwide to drive transformation, improve outcomes, 
                  and accelerate maturity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a HIMSS Solution Provider, MOHIM leverages proven methodologies, assessment frameworks, and best practices 
                  to guide Morocco&apos;s healthcare ecosystem toward international excellence. This partnership ensures that 
                  Morocco&apos;s digital health initiatives meet the highest global standards for interoperability, security, 
                  and clinical effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMRAM Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  EMRAM: Measuring Digital Health Maturity
                </h2>
                <p className="text-primary font-medium text-lg mb-4">The Global Standard for EMR Excellence</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The <strong className="text-foreground">HIMSS Electronic Medical Record Adoption Model (EMRAM)</strong> is 
                  an internationally recognized, eight-stage (0–7) framework that evaluates how effectively healthcare 
                  organizations leverage electronic medical records to enhance patient care, operational efficiency, and clinical outcomes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EMRAM assessments measure capabilities across data capture, clinical decision support, closed-loop medication 
                  management, analytics, and interoperability. Achieving higher EMRAM stages—particularly Stage 6 and Stage 7—demonstrates 
                  world-class digital health maturity and a commitment to evidence-based, patient-centered care.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src={emramLogo} 
                  alt="EMRAM Stage 7 - HIMSS Electronic Medical Record Adoption Model"
                  className="w-80 mx-auto"
                />
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">MOHIM&apos;s Role in EMRAM Advancement</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Assessment & Benchmarking:</strong> MOHIM conducts EMRAM assessments 
                    for Moroccan hospitals and health systems, providing detailed reports and roadmaps for progression.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Capacity Building:</strong> Through training programs, projectathons, 
                    and technical consultations, MOHIM equips teams with the knowledge and tools needed to advance their EMRAM stage.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Standards Alignment:</strong> By integrating EMRAM criteria with 
                    HL7 FHIR, IHE profiles, and digital trust protocols, MOHIM ensures that maturity gains are sustainable, 
                    interoperable, and secure.
                  </p>
                </div>
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
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Vision for the Future
                </h2>
                <p className="text-primary font-medium">Positioning Morocco as a Regional Leader in Digital Health</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                MOHIM envisions a Morocco where every citizen benefits from a connected, intelligent, and secure healthcare 
                ecosystem. By 2030, we aim to establish Morocco as a regional hub for digital health innovation—where hospitals 
                achieve EMRAM Stage 6+ maturity, data flows seamlessly across borders through IPS and FHIR, and public trust 
                in digital health is anchored by robust PKI frameworks and transparent governance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Through sustained collaboration with HIMSS, IHE, HL7, and national stakeholders, MOHIM will drive systemic 
                transformation that goes beyond technology—reshaping care delivery models, empowering clinicians with 
                real-time insights, and ensuring that every Moroccan, regardless of location or socioeconomic status, 
                has access to world-class digital health services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is not just a vision—it is a strategic commitment to building a health system that is resilient, 
                equitable, and ready for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
