import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Google Drive folder for external link
  const driveFolderUrl = "https://drive.google.com/drive/folders/1eXzGiu0PDG3X-wYYielzWsMI8akkcKy_";
  
  // Add your Google Drive image IDs here
  // To get the ID: right-click image in Drive > Get link > extract ID from URL
  const imageIds = [
    // Example: "1ABC123xyz" - add your image IDs here
  ];

  const getImageUrl = (id: string) => 
    `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

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

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {imageIds.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {imageIds.map((id, index) => (
                <div
                  key={id}
                  className="aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer hover:opacity-90 transition-opacity shadow-md"
                  onClick={() => setSelectedImage(id)}
                >
                  <img
                    src={getImageUrl(id)}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Fallback to embedded view when no individual images are set */
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
              <div className="relative overflow-hidden" style={{ height: '700px' }}>
                <iframe
                  src={`https://drive.google.com/embeddedfolderview?id=1eXzGiu0PDG3X-wYYielzWsMI8akkcKy_#grid`}
                  className="w-full border-0 absolute top-0 left-0"
                  style={{ height: '900px' }}
                  title={t('gallery.title')}
                  allowFullScreen
                />
                {/* Gradient overlay to hide file names */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
              </div>
            </div>
          )}
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            <a 
              href={driveFolderUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {t('gallery.viewMore')}
            </a>
          </p>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img
              src={`https://drive.google.com/thumbnail?id=${selectedImage}&sz=w1200`}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Gallery;
