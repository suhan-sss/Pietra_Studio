export type Project = {
  slug: string;
  title: string;
  type: string;
  category: "Cultural" | "Residential" | "Hospitality";
  location: string;
  year: string | null;
  scope: string;
  surface?: string;
  team: string[];
  photography?: string;
  completion?: string;
  hero: string;
  description: string;
  story: string[];
  materials: { name: string; note: string }[];
  images: { src: string; caption: string }[];
  quote?: { text: string; by: string };
};

export const projects: Project[] = [
  {
    slug: "terra-gallery",
    title: "Terra Gallery",
    type: "Cultural",
    category: "Cultural",
    location: "Lisbon",
    year: "2026",
    scope: "Interior architecture, surfaces, lighting",
    surface: "310 m² on two floors",
    team: ["Tomás Neves", "Rita Salgado", "Sofia Melo"],
    photography: "Clara Duarte",
    completion: "March 2026",
    hero:
      "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&w=2000&q=80",
    description:
      "A two-storey gallery carved out of a former tile warehouse on Rua das Janelas Verdes.",
    story: [
      "The building had been a tile warehouse for almost a century, and the new owners wanted a gallery that could hold a season of ceramics, drawings, and small bronzes without ever feeling like a white box. We left the structural brick exposed, set the galleries on a single neutral plaster, and let the south light do the work.",
      "The staircase was the hardest piece. We restored the original wrought-iron treads, added a single handrail in unlacquered brass, and lit each landing from a different direction so the gallery reads as a sequence, not a building.",
      "The ground-floor reception holds a long travertine bench and nothing else; the cleat rail up the wall was made in the same workshop as our terrace joinery at Casa Margeride.",
    ],
    materials: [
      {
        name: "Lime plaster",
        note: "Trowelled in one pale tone across all upper walls",
      },
      {
        name: "Travertine",
        note: "Honed, unfilled, 12 mm thick across the bench and threshold",
      },
      {
        name: "Unlacquered brass",
        note: "Hand-formed handrail, allowed to age with the room",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1600&q=80",
        caption: "The south wall after plastering, before the first show",
      },
      {
        src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
        caption: "Reception bench in a single travertine slab",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        caption: "Staircase with restored wrought-iron treads",
      },
    ],
    quote: {
      text: "The building already knew what it wanted to be; we just took the newer partitions out.",
      by: "Tomás Neves",
    },
  },
  {
    slug: "casa-margeride",
    title: "Casa Margeride",
    type: "Residential",
    category: "Residential",
    location: "Lisbon",
    year: "2025",
    scope: "Interior architecture, surfaces, joinery, lighting",
    surface: "212 m² on one floor",
    team: ["Marta Ruiz", "Inês Cardoso", "Rui Bastos"],
    photography: "Clara Duarte",
    completion: "May 2025",
    hero:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    description:
      "A 22-metre-deep apartment in a Pombaline block, opened back to its original arched openings.",
    story: [
      "The family arrived with a demolition plan, but the real problem was gloom at the centre of a 22-metre-deep plan. We opened the three arched openings back to their full radius, lime-plastered the whole apartment in one pale tone, and laid wide oak boards running the length of the plan.",
      "Under the arcade we set a single 6-metre bench in solid oak, with a brass shelf above it for keys, post, and the day's reading. The kitchen is a single run of joinery on the courtyard wall, with the sink cut directly into a stone slab that we sourced from the same quarry as the original thresholds.",
      "The bedrooms hold nothing but a bed, a lamp, and a chest of drawers from our own workshop in Sintra. The bathrooms are stone, brassware, and a single drainage line; everything else was removed.",
    ],
    materials: [
      {
        name: "Lime plaster",
        note: "One pale tone, hand-trowelled, across every wall and ceiling",
      },
      {
        name: "European oak",
        note: "220 mm wide boards, run lengthways through the whole plan",
      },
      {
        name: "Aged brass",
        note: "Unlacquered taps, handles, and bench shelf; allowed to oxidise",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
        caption: "The arcade restored to full radius",
      },
      {
        src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
        caption: "Living room in pale lime plaster",
      },
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
        caption: "The continuous oak bench beneath the arcade",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        caption: "Oak boards running the length of the plan",
      },
    ],
    quote: {
      text: "We hadn't realised the apartment was dark until it wasn't.",
      by: "Private client, Lisbon",
    },
  },
  {
    slug: "casa-chiado",
    title: "Casa Chiado",
    type: "Residential",
    category: "Residential",
    location: "Lisbon",
    year: "2024",
    scope: "Interior architecture, kitchen, bathrooms, joinery",
    surface: "148 m² across two floors",
    team: ["Marta Ruiz", "Nuno Belém"],
    photography: "Inês Lobo",
    completion: "September 2024",
    hero:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80",
    description:
      "A two-storey apartment on Largo do Chiado restored around its original stucco ceilings.",
    story: [
      "The original ceilings had survived two earlier renovations under layers of vinyl and plasterboard. We stripped everything back, repaired each cornice by hand with the same mouldings used in 1860, and rebuilt the floors in wide oak above a new acoustic layer.",
      "The kitchen is set against the party wall with a single run of joinery in walnut, the worktop in honed marble, and a brass tap we have used on every project since 2018.",
      "Upstairs, the bathrooms are full stone — travertine walls, travertine floors, travertine shelving — with a single mirrored cabinet per room and nothing on the walls.",
    ],
    materials: [
      {
        name: "Stucco",
        note: "Hand-repaired cornices, painted in a single bone tone",
      },
      {
        name: "European walnut",
        note: "Solid joinery in the kitchen and study",
      },
      {
        name: "Honed travertine",
        note: "Walls, floors and shelves in both bathrooms",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80",
        caption: "Restored stucco ceiling in the drawing room",
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
        caption: "Walnut kitchen, single run on the party wall",
      },
    ],
  },
  {
    slug: "quinta-do-vale",
    title: "Quinta do Vale",
    type: "Residential",
    category: "Residential",
    location: "Alentejo",
    year: "2024",
    scope: "Restoration, joinery, soft furnishings",
    surface: "640 m² across three buildings",
    team: ["Tomás Neves", "Camille Roux", "Rui Bastos"],
    photography: "Clara Duarte",
    completion: "June 2024",
    hero:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2000&q=80",
    description:
      "A working quinta in the Alentejo, restored over four years and furnished almost entirely by hand.",
    story: [
      "The quinta had been a working farm for five generations; we restored the main house, the wine cellar, and the workers' quarters without disturbing any of the agricultural fabric. The brief was to keep everything we found.",
      "We added a kitchen in the old bread oven, a single bath per bedroom, and almost no new furniture. The linen curtains were woven in a workshop we have worked with since our second project; the rugs came from the family.",
      "Wood for the new joinery was cut from a stand of cedar that had been wind-felled on the property the previous winter. It was air-dried for eighteen months before being milled.",
    ],
    materials: [
      { name: "Local cedar", note: "Wind-felled on site, air-dried, milled in Évora" },
      { name: "Lime plaster", note: "Hand-applied in the older rooms" },
      { name: "Hand-loomed linen", note: "Curtains, bed canopies, tablecloths" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        caption: "Oak boards sorted by grain before installation",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        caption: "Restored farmhouse kitchen",
      },
    ],
  },
  {
    slug: "villa-sereno",
    title: "Villa Sereno",
    type: "Residential",
    category: "Residential",
    location: "Comporta",
    year: null,
    scope: "Full interior, landscape collaboration",
    surface: "380 m² on one floor",
    team: ["Marta Ruiz", "Inês Cardoso", "Camille Roux"],
    photography: "Clara Duarte",
    completion: "Spring 2026",
    hero:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80",
    description:
      "A single-storey villa on the pine line at Comporta, finished in lime plaster and unfinished pine.",
    story: [
      "The villa sits at the edge of the pine forest, with a single long view towards the rice fields. We designed the interior around that view, with one full-width opening onto a covered terrace.",
      "The materials are lime plaster, unfinished pine, and brushed brass; everything else is from the local landscape. The pool is lined in green mosaic, the floors are wide pine boards, and the lighting is almost entirely indirect.",
      "The garden was a separate project with the landscape architect Sofia Pinto; the only pieces we specified were the two stone basins at the entrance.",
    ],
    materials: [
      { name: "Unfinished pine", note: "Wide boards throughout, oiled once at handover" },
      { name: "Lime plaster", note: "All walls, hand-trowelled in one tone" },
      { name: "Green mosaic", note: "Hand-cut tiles lining the pool and basin" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        caption: "Living room facing the rice fields",
      },
    ],
  },
  {
    slug: "hotel-du-passage",
    title: "Hôtel du Passage",
    type: "Hospitality",
    category: "Hospitality",
    location: "Paris",
    year: null,
    scope: "Restoration, FF&E, signage",
    surface: "1,420 m² across 22 rooms",
    team: ["Tomás Neves", "Camille Roux", "Sofia Melo", "Rui Bastos"],
    photography: "Inès Dupont",
    completion: "Winter 2026",
    hero:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=2000&q=80",
    description:
      "A 22-room hotel in a former print workshop on the edge of the Marais, opening late 2026.",
    story: [
      "The building was a print workshop until 1998; we removed everything that had been added since and started again from the original floor plan. The reception desk is a single piece of walnut, the bar is in unlacquered brass, and the rooms hold almost nothing but a bed, a desk, a wardrobe, and a single lamp.",
      "The linen for the bedrooms was woven in the same workshop we use at Casa Margeride; the bath towels were made on a handloom in Porto. Every room has a different floor plan but the same palette.",
      "Signage was set by hand in the studio and routed into the same brass as the door handles. The room numbers are a single hand-cut card behind each door.",
    ],
    materials: [
      { name: "Solid walnut", note: "Reception desk, room desks, wardrobes" },
      { name: "Unlacquered brass", note: "Bar, signage, all door hardware" },
      { name: "Hand-loomed linen", note: "Bedroom curtains, beds, runners" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
        caption: "Reception desk in solid walnut",
      },
      {
        src: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1600&q=80",
        caption: "A typical room with the standard palette",
      },
    ],
  },
];

export const journalArticles = [
  {
    slug: "why-we-begin-on-site",
    title: "Why we begin on site",
    date: "Mar 2026",
    category: "Process",
    excerpt:
      "Two days of looking are the cheapest drawings you will ever pay for.",
    content: [
      "There is a fixed rule in the studio: we visit a site twice before we draw a line. The first visit is unhurried, and almost always without a tape measure. We walk the rooms in the order a guest would, mark how the light falls at four different hours, listen to the building at night, and read whatever the previous occupants have left behind.",
      "By the second visit we know what the building is telling us. Only then do we measure, photograph, and produce the first survey drawings. On Casa Margeride, the second visit took a full day and produced four sheets that have not needed revising in the eighteen months since.",
      "Two days of looking are the cheapest drawings you will ever pay for.",
    ],
  },
  {
    slug: "honed-stone-field-guide",
    title: "Honed stone field guide",
    date: "Jan 2026",
    category: "Materials",
    excerpt:
      "What to ask a quarry, what to ask a fabricator, and what to never allow in a specification.",
    content: [
      "Most of the projects we work on include at least one stone that we have specified by name and by quarry. The list of things to ask is short, but it is not optional.",
      "Ask the quarry which bench the sample came from. Ask the fabricator which way the slab was cut and whether the resin is matched. Specify the wax, if any, and the slip rating. Never accept a polished finish in a room that sees water. Never specify a stone that the fabricator has not cut in their own shop.",
      "Most disputes about stone are quietly settled by visiting the yard with the slab before it is cut.",
    ],
  },
  {
    slug: "casa-margeride-year-on",
    title: "Casa Margeride, year on",
    date: "Nov 2025",
    category: "Projects",
    excerpt: "What a 22-metre apartment looks like after a year of family life.",
    content: [
      "We returned to Casa Margeride fourteen months after handover. The lime plaster has settled into a slightly warmer tone; the oak has darkened by a full shade under the arcade; the brass shelf has the patina we specified but rarely get to see in person.",
      "The bench has held up to three children and a dog. The kitchen joinery has exactly one new scratch, caused by a delivery that everyone denies. The single bathroom on the courtyard has been used as intended and looks like it.",
      "Nothing has moved, cracked, or been asked to be repaired. That is the design brief that took the longest to write.",
    ],
  },
  {
    slug: "choosing-linen-that-lasts",
    title: "Choosing linen that lasts",
    date: "Sep 2025",
    category: "Craft",
    excerpt:
      "On thread count, weight, and why a heavier linen is almost always the cheaper choice over a decade.",
    content: [
      "Most linens we specify are heavier than the customer expects at the first sample. A 280 gsm linen, washed correctly and held out of direct sun, will outlast three lighter weights and look better the whole way through.",
      "We work with two mills: one outside Porto, one near Bruges. Both have agreed to a set of weights, finishes, and tones we keep in the studio. Neither stocks anything we have not asked them for.",
      "The cheapest linen over a decade is almost always the heaviest linen you can find.",
    ],
  },
  {
    slug: "lime-plaster-and-how-it-holds-light",
    title: "Lime plaster, and how it holds light",
    date: "Jun 2025",
    category: "Materials",
    excerpt:
      "On the difference between lime plaster and lime paint, and why we almost always use the first.",
    content: [
      "Lime plaster is a wall finish that is trowelled on in three or more coats over a base. Lime paint is a finish that is painted on top of another surface. The first will outlast the building; the second will need recoating within five years.",
      "The studio uses lime plaster in almost every interior project. The trowel pattern is part of the room; the colour shifts through the day as the light moves; small repairs can be made with the same material years later.",
      "The cost is roughly three times a paint finish. The room it gives back is incommensurate.",
    ],
  },
  {
    slug: "why-we-leave-brass-unlacquered",
    title: "Why we leave brass unlacquered",
    date: "Mar 2025",
    category: "Craft",
    excerpt:
      "On why a finish that the customer often asks to remove is the one we never apply.",
    content: [
      "Brass, left without lacquer, will oxidise to a soft brown within six months and continue to darken for the life of the building. Lacquer holds it at the showroom colour for as long as it stays on, which is rarely longer than two years in a working room.",
      "We never specify lacquered brass. We always specify a small tin of the matching wax and a soft cloth, left in the drawer below the room that needs it.",
      "The room finishes the brass for us.",
    ],
  },
];

export const team = [
  { name: "Marta Ruiz", role: "Founder" },
  { name: "Tomás Neves", role: "Founder" },
  { name: "Inês Cardoso", role: "Senior architect" },
  { name: "Rita Salgado", role: "Project architect" },
  { name: "Rui Bastos", role: "Interior designer" },
  { name: "Nuno Belém", role: "Detailing and technical" },
  { name: "Camille Roux", role: "Architect, Milan" },
  { name: "Sofia Melo", role: "Studio manager" },
  { name: "Diogo Faria", role: "Architect" },
];

export const awards = [
  { title: "Iberian Interior Award", detail: "Interior of the Year", year: "2026" },
  { title: "Marés Review", detail: "Ten rooms of the year", year: "2026" },
  { title: "Atrium Quarterly", detail: "Cover feature", year: "2025" },
  { title: "Habitar Magazine", detail: "Portfolio feature", year: "2025" },
  { title: "Plaster & Light", detail: "Studio visit", year: "2025" },
  { title: "Casa Nova Awards", detail: "Hospitality, shortlist", year: "2024" },
  { title: "Cascais Design Prize", detail: "—", year: "2023" },
];

export const services = [
  { name: "Interior Architecture", note: "Plans, partitions, ceilings, doors" },
  { name: "Spatial Planning", note: "Test fits and adjacencies before any drawing" },
  { name: "Site Studies", note: "Two visits, fixed fee, every project" },
  { name: "Concept Design", note: "Materials, light, and proportion" },
  { name: "Light Planning", note: "How the sun crosses the rooms" },
  { name: "Joinery Design", note: "Drawn in the studio, made in our workshop" },
  { name: "Material Schedules", note: "By name, by quarry, by finish" },
  { name: "Colour Direction", note: "Plaster tones, wood stains, brass patinas" },
  { name: "Custom Furniture", note: "Bespoke pieces for one room at a time" },
  { name: "FF&E & Styling", note: "Soft furnishings and final dressing" },
  { name: "Art & Objects", note: "Curated in collaboration with the client" },
  { name: "Lighting", note: "Indirect where possible, warm in working rooms" },
  { name: "Kitchens", note: "Single-run joinery, stone slabs, brassware" },
  { name: "Bathrooms", note: "Stone, brassware, drainage set out together" },
  { name: "Procurement", note: "On the client's behalf, at trade rates" },
  { name: "Turnkey Delivery", note: "Coordinated with one contractor per project" },
];

export const approach = [
  {
    n: "01",
    title: "Consultation",
    body: "Begins on site, with the client, the building, and the use. We agree the scope, the budget frame, and a tentative timeline before any drawing.",
  },
  {
    n: "02",
    title: "Concept & Material",
    body: "A spatial concept and a working palette of plaster, stone, wood, and metal. Plans, references, and physical samples for review.",
  },
  {
    n: "03",
    title: "Sourcing & Making",
    body: "Bespoke joinery, furniture, and art. Long-term workshops; almost everything in the room is made for the room.",
  },
  {
    n: "04",
    title: "Styling & Delivery",
    body: "On-site coordination, final reveal, and a return visit a season after handover.",
  },
];
