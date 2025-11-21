import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import speakerPlaceholder from '@/assets/speaker-placeholder.png';
import eventsData from '@/data/events.json'; // <-- path to the generated JSON

export default function Events() {
  const { t } = useLanguage();
  const { agenda = [], speakers = [] } = (eventsData as any) || {};

  // State for the selected speaker (for the popup)
  const [selectedSpeaker, setSelectedSpeaker] = useState<any | null>(null);

  // Map speakers into a safe structure for display
  const speakersForDisplay = speakers.map((s: any, idx: number) => ({
    name: s.name || `Speaker ${idx + 1}`,
    title: s.title || '',
    organization: s.organization || '',
    image: s.image ? s.image : speakerPlaceholder,
    bio: s.bio || '',
  }));

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('events.title')}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>November 25-27, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>UM6SS, Casablanca</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('events.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('events.speakers')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('events.speakersDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakersForDisplay.map((speaker, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {speaker.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('events.agenda')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('events.agendaDesc')}
            </p>
          </div>

          <div className="space-y-12">
            {agenda.map((day: any, dayIndex: number) => (
              <div key={dayIndex}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {day.day || `Day ${dayIndex + 1}`}
                  </h3>
                  <p className="text-muted-foreground">{day.date || ''}</p>
                </div>
                <div className="space-y-4">
                  {(day.sessions || []).map(
                    (session: any, sessionIndex: number) => (
                      <Card
                        key={sessionIndex}
                        className="hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center gap-2 text-primary font-semibold min-w-[140px]">
                              <Clock className="w-4 h-4" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-foreground mb-1">
                                {session.title}
                              </h4>
                              {session.speaker && (
                                <p className="text-sm text-muted-foreground mb-1">
                                  {session.speaker}
                                </p>
                              )}
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>{session.location || ''}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSelectedSpeaker(null)} // click outside to close
        >
          <div
            className="bg-background rounded-2xl shadow-xl max-w-lg w-full mx-4 p-6 relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground text-xl"
              aria-label="Close"
            >
              ×
            </button>

            <div className="flex flex-col items-center text-center">
              <img
                src={selectedSpeaker.image}
                alt={selectedSpeaker.name}
                className="w-48 h-48 rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-foreground mb-1">
                {selectedSpeaker.name}
              </h3>
              <p className="text-primary font-medium mb-1">
                {selectedSpeaker.title}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {selectedSpeaker.organization}
              </p>
              {selectedSpeaker.bio && (
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {selectedSpeaker.bio}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
