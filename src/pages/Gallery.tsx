import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  
  const driveFolderId = "1eXzGiu0PDG3X-wYYielzWsMI8akkcKy_";
  
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('gallery.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Embed Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
            <iframe
              src={`https://drive.google.com/embeddedfolderview?id=${driveFolderId}#grid`}
              className="w-full h-[600px] md:h-[800px] border-0"
              title={t('gallery.title')}
              allowFullScreen
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            {t('gallery.viewMore')}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
