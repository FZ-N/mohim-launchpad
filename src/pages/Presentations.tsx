import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Download, ExternalLink } from "lucide-react";

const Presentations = () => {
  const { t } = useLanguage();

  // Google Drive folder ID for presentations
  const driveFolderId = "YOUR_DRIVE_FOLDER_ID_HERE";

  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("presentations")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("presentationsDescription")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
            <div className="p-6 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  {t("presentationFiles")}
                </h2>
              </div>
            </div>
            
            <div className="relative" style={{ height: "600px" }}>
              <iframe
                src={`https://drive.google.com/embeddedfolderview?id=${driveFolderId}#list`}
                className="w-full h-full border-0"
                title="Presentation Files"
              />
            </div>

            <div className="p-4 bg-muted/30 border-t border-border">
              <a
                href={`https://drive.google.com/drive/folders/${driveFolderId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                {t("openInDrive")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Presentations;
