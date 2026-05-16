export type ServiceItem = {
  name: string;
  price: string;
  fromPrice?: boolean;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  intro?: string;
  items: ServiceItem[];
  notes?: string[];
};

export const services: ServiceCategory[] = [
  {
    slug: 'knippen',
    title: 'Knippen',
    items: [
      { name: 'Knippen', price: '€31,00' },
      { name: 'Wassen, knippen', price: '€36,00' },
      { name: 'Wassen, knippen, modeldrogen', price: '€41,00' },
      { name: 'Wassen, knippen, föhnen / watergolf', price: '€56,50' },
      { name: 'Knippen t/m 12 jaar', price: '€24,00' },
      { name: 'Knippen t/m 15 jaar', price: '€26,50' },
      { name: 'Wassen, föhnen / watergolf', price: '€33,00' },
    ],
    notes: [
      'Het haar dient dezelfde dag gewassen en zonder stylingproducten te zijn.',
    ],
  },
  {
    slug: 'kleuren',
    title: 'Kleuren',
    intro: 'Inclusief wassen.',
    items: [
      { name: 'Topchic — permanente kleuring', price: '€46,00', fromPrice: true },
      { name: 'Topchic Zero — permanente kleuring zonder ammonia', price: '€48,00', fromPrice: true },
      { name: 'Colorance — spoeling', price: '€41,00' },
      { name: 'Highlights (kam)', price: '€42,00', fromPrice: true },
      { name: 'Highlights / lowlights (folies)', price: '€78,00', fromPrice: true },
    ],
    notes: [
      'Voor highlights / lowlights graag telefonisch contact opnemen via 072 - 531 59 91.',
    ],
  },
  {
    slug: 'permanenten',
    title: 'Permanenten',
    intro: 'Inclusief wassen, knippen, föhnen / watergolf.',
    items: [
      { name: 'Permanent — deel', price: '€97,50', fromPrice: true },
      { name: 'Permanent — heel', price: '€112,50', fromPrice: true },
    ],
  },
];

export const priceDisclaimer =
  'Alle prijzen zijn inclusief 9% btw, geldig vanaf 1 januari 2026. Prijswijzigingen en typefouten voorbehouden.';
