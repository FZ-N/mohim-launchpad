import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import speakerPlaceholder from '@/assets/speaker-placeholder.png';

export default function Events() {
  const { t } = useLanguage();

  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Interoperability Officer",
      organization: "HL7 International",
      image: speakerPlaceholder,
    },
    {
      name: "Prof. Ahmed Benali",
      title: "Digital Health Director",
      organization: "UM6SS",
      image: speakerPlaceholder,
    },
    {
      name: "Dr. Maria Garcia",
      title: "EMRAM Expert",
      organization: "HIMSS",
      image: speakerPlaceholder,
    },
    {
      name: "Eng. Youssef Khalil",
      title: "FHIR Architect",
      organization: "IHE International",
      image: speakerPlaceholder,
    },
    {
      name: "Dr. Sophie Laurent",
      title: "Cybersecurity Specialist",
      organization: "NumiH France",
      image: speakerPlaceholder,
    },
    {
      name: "Mr. Hassan Idrissi",
      title: "Healthcare Innovation Lead",
      organization: "Ministry of Health",
      image: speakerPlaceholder,
    },
  ];

  const agenda = [
    {
      day: "Day 1",
      date: "November 25, 2025",
      sessions: [
        { time: "09:00 - 10:00", title: t('events.registration'), location: "Main Hall" },
        { time: "10:00 - 11:30", title: t('events.opening'), location: "Auditorium A" },
        { time: "11:30 - 13:00", title: t('events.keynote'), location: "Auditorium A" },
        { time: "13:00 - 14:00", title: t('events.lunch'), location: "Restaurant Area" },
        { time: "14:00 - 16:00", title: t('events.workshop1'), location: "Room 101" },
        { time: "16:00 - 18:00", title: t('events.demo'), location: "MOHIM Stand" },
      ],
    },
    {
      day: "Day 2",
      date: "November 26, 2025",
      sessions: [
        { time: "09:00 - 11:00", title: t('events.technical'), location: "Auditorium B" },
        { time: "11:00 - 13:00", title: t('events.hajj'), location: "Auditorium A" },
        { time: "13:00 - 14:00", title: t('events.lunch'), location: "Restaurant Area" },
        { time: "14:00 - 16:00", title: t('events.workshop2'), location: "Room 102" },
        { time: "16:00 - 18:00", title: t('events.panel'), location: "Auditorium A" },
      ],
    },
    {
      day: "Day 3",
      date: "November 27, 2025",
      sessions: [
        { time: "09:00 - 11:00", title: t('events.emram'), location: "Room 103" },
        { time: "11:00 - 13:00", title: t('events.partners'), location: "Main Hall" },
        { time: "13:00 - 14:00", title: t('events.lunch'), location: "Restaurant Area" },
        { time: "14:00 - 16:00", title: t('events.closing'), location: "Auditorium A" },
      ],
    },
  ];

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
            {speakers.map((speaker, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
                  <p className="text-sm text-muted-foreground">{speaker.organization}</p>
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
            {agenda.map((day, dayIndex) => (
              <div key={dayIndex}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{day.day}</h3>
                  <p className="text-muted-foreground">{day.date}</p>
                </div>
                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <Card key={sessionIndex} className="hover:shadow-md transition-shadow">
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
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{session.location}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
