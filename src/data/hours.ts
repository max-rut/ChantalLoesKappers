export type DayHours = {
  day: string;
  hours: string;
  closed?: boolean;
};

export const openingHours: DayHours[] = [
  { day: 'Maandag', hours: 'Gesloten', closed: true },
  { day: 'Dinsdag', hours: '08:30 – 17:30' },
  { day: 'Woensdag', hours: '08:30 – 17:30' },
  { day: 'Donderdag', hours: '08:30 – 17:30' },
  { day: 'Vrijdag', hours: '08:30 – 21:00' },
  { day: 'Zaterdag', hours: '08:00 – 14:00' },
  { day: 'Zondag', hours: 'Gesloten', closed: true },
];

export const hoursNote =
  'Openingstijden kunnen rond feestdagen afwijken. Bekijk de actuele tijden in het afsprakensysteem.';
