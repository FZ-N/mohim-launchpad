import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, ExternalLink, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PresentationSection {
  id: string;
  title: string;
  titleFr: string;
  driveFolderId: string;
}

const presentationSections: PresentationSection[] = [
  {
    id: "day1",
    title: "Day 1 - Opening & Vision",
    titleFr: "Jour 1 - Ouverture & Vision",
    driveFolderId: "YOUR_DAY1_FOLDER_ID",
  },
  {
    id: "day2",
    title: "Day 2 - Technical Workshops",
    titleFr: "Jour 2 - Ateliers Techniques",
    driveFolderId: "YOUR_DAY2_FOLDER_ID",
  },
  {
    id: "day3",
    title: "Day 3 - Case Studies & Closing",
    titleFr: "Jour 3 - Études de Cas & Clôture",
    driveFolderId: "YOUR_DAY3_FOLDER_ID",
  },
];

const Presentations = () => {
  const { language, t } = useLanguage();

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
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-muted/50 p-2 mb-6">
              {presentationSections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Calendar className="h-4 w-4" />
                  {language === "fr" ? section.titleFr : section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {presentationSections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
                  <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <h2 className="text-xl font-semibold text-foreground">
                        {language === "fr" ? section.titleFr : section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="relative" style={{ height: "500px" }}>
                    <iframe
                      src={`https://drive.google.com/embeddedfolderview?id=${section.driveFolderId}#list`}
                      className="w-full h-full border-0"
                      title={section.title}
                    />
                  </div>

                  <div className="p-4 bg-muted/30 border-t border-border">
                    <a
                      href={`https://drive.google.com/drive/folders/${section.driveFolderId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("openInDrive")}
                    </a>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default Presentations;
