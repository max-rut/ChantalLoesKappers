export type Product = {
  name: string;
  blurb?: string;
  // Vul straks aan met een echte afbeelding (pad in src/assets/products of public/).
  // Zolang null is, toont ProductCard een placeholder-box met de productnaam.
  image?: string | null;
};

export const products: Product[] = [
  { name: 'Blondes & Highlights', image: null },
  { name: 'Color', image: null },
  { name: 'Color Extra Rich', image: null },
  { name: 'Colorance', image: null },
  { name: 'Curly Twist', image: null },
  { name: 'Elixir', image: null },
  { name: 'Golden Spray', image: null },
  { name: 'StyleSign', image: null },
  { name: 'Hair & Body Shampoo', image: null },
  { name: 'Just Smooth', image: null },
  { name: 'Reshade', image: null },
  { name: 'Rich Repair', image: null },
  { name: 'Scalp Specialist', image: null },
  { name: 'Silver', image: null },
  { name: 'Topchic', image: null },
  { name: 'Topchic Zero', image: null },
  { name: 'Ultra Volume', image: null },
];

export const productIntro =
  'Wij werken uitsluitend met professionele Goldwell-producten. Hieronder vind je een overzicht van de lijnen die we gebruiken en in de salon verkopen.';
