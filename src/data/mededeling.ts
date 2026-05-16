export type Mededeling = {
  visible: boolean;
  title?: string;
  body: string;
};

// Pas dit bestand aan om een mededeling op de homepage te tonen.
// Zet `visible: false` om de banner te verbergen.
export const mededeling: Mededeling = {
  visible: true,
  title: 'Tijdelijke klantenstop',
  body:
    'Vanwege toenemende drukte hebben wij een (tijdelijke) klantenstop voor nieuwe klanten. Bestaande klanten kunnen gewoon online een afspraak maken.',
};
