export interface GalleryItem {
  id: number;
  src: string;
  category: "Portrait" | "Landscape" | "Pre-Wedding";
  title: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface SocialLinks {
  instagram: string;
  twitter: string;
  tiktok: string;
}

export interface PlaceholderData {
  name: string;
  tagline: string;
  bio: string[];
  services: string[];
  clients: string[];
  gallery: GalleryItem[];
  email: string;
  social: SocialLinks;
}

const placeholder: PlaceholderData = {
  name: "Blak Naira",
  tagline: "Capturing light, shadow, and everything in between.",
  bio: [
    "Blak Naira is a visionary photographer whose work transcends the ordinary, weaving together creativity, cinematic flair, and dramatic artistry under the distinctive banner of their brand, Blak Naira. With a keen eye for storytelling through light, shadow, and composition, Blak Naira photography captures the essence of fleeting moments and transforms them into timeless visual narratives.",
    "Specializing in creative and cinematic photography, Blak Naira masterfully blends bold, evocative aesthetics with a deep appreciation for the artistic potential of every frame. Their portfolio is a testament to a passion for pushing boundaries, where each image is a carefully crafted piece of art, rich with emotion and atmosphere.",
  ],
  services: ["Portrait", "Out-Door", "Studio"],
  clients: ["Vogue", "Nike", "Apple", "The New Yorker", "Levi's"],
  gallery: [
    // ── IMG series ───────────────────────────────────────────────────────────

    {
      id: 52,
      src: "/images/IMG_5344.JPG.jpeg",
      category: "Pre-Wedding",
      title: "Portrait No. 13",
      aspect: "portrait",
    },
    {
      id: 53,
      src: "/images/IMG_5423.JPG.jpeg",
      category: "Portrait",
      title: "Skyline",
      aspect: "portrait",
    },

    // ── misc ─────────────────────────────────────────────────────────────────
    {
      id: 54,
      src: "/images/where.jpeg",
      category: "Portrait",
      title: "Somewhere",
      aspect: "square",
    },

    {
      id: 28,
      src: "/images/IMG_3300.JPG.jpeg",
      category: "Pre-Wedding",
      title: "Pre-Wedding No. 7",
      aspect: "portrait",
    },
    {
      id: 29,
      src: "/images/IMG_4040.JPG.jpeg",
      category: "Portrait",
      title: "Horizon Line",
      aspect: "portrait",
    },
    {
      id: 30,
      src: "/images/IMG_4056.JPG.jpeg",
      category: "Portrait",
      title: "Crossroads",
      aspect: "square",
    },
    {
      id: 31,
      src: "/images/IMG_4506.JPG.jpeg",
      category: "Pre-Wedding",
      title: "Silhouette I",
      aspect: "portrait",
    },
    {
      id: 32,
      src: "/images/IMG_4530.JPG.jpeg",
      category: "Portrait",
      title: "Portrait No. 8",
      aspect: "portrait",
    },
    {
      id: 33,
      src: "/images/IMG_4561.JPG.jpeg",
      category: "Pre-Wedding",
      title: "Morning Mist",
      aspect: "portrait",
    },
    {
      id: 34,
      src: "/images/IMG_4734.JPG.jpeg",
      category: "Portrait",
      title: "After Rain",
      aspect: "square",
    },
    {
      id: 35,
      src: "/images/IMG_4742.JPG.jpeg",
      category: "Portrait",
      title: "Silhouette II",
      aspect: "portrait",
    },
    {
      id: 36,
      src: "/images/IMG_4747.JPG.jpeg",
      category: "Portrait",
      title: "Portrait No. 9",
      aspect: "portrait",
    },
    {
      id: 37,
      src: "/images/IMG_4750.JPG.jpeg",
      category: "Portrait",
      title: "Flat Earth",
      aspect: "portrait",
    },
    {
      id: 38,
      src: "/images/IMG_4753.JPG.jpeg",
      category: "Portrait",
      title: "Under Neon",
      aspect: "square",
    },
    {
      id: 39,
      src: "/images/IMG_4876.JPG.jpeg",
      category: "Landscape",
      title: "Close Study",
      aspect: "landscape",
    },
    {
      id: 40,
      src: "/images/IMG_4878.JPG.jpeg",
      category: "Landscape",
      title: "Landscape No. 10",
      aspect: "landscape",
    },
    {
      id: 41,
      src: "/images/IMG_4979.JPG.jpeg",
      category: "Portrait",
      title: "Long Exposure",
      aspect: "portrait",
    },
    {
      id: 42,
      src: "/images/IMG_4996.JPG.jpeg",
      category: "Portrait",
      title: "Between Steps",
      aspect: "square",
    },
    {
      id: 43,
      src: "/images/IMG_5135.JPG.jpeg",
      category: "Portrait",
      title: "Depth I",
      aspect: "portrait",
    },
    {
      id: 44,
      src: "/images/IMG_5139.JPG.jpeg",
      category: "Portrait",
      title: "Portrait No. 11",
      aspect: "portrait",
    },
    {
      id: 45,
      src: "/images/IMG_5141.JPG.jpeg",
      category: "Portrait",
      title: "Dusk Fields",
      aspect: "portrait",
    },
    {
      id: 46,
      src: "/images/IMG_5207.JPG.jpeg",
      category: "Portrait",
      title: "Overpass",
      aspect: "square",
    },
    {
      id: 47,
      src: "/images/IMG_5208.JPG.jpeg",
      category: "Portrait",
      title: "Depth II",
      aspect: "portrait",
    },
    {
      id: 48,
      src: "/images/IMG_5233.JPG.jpeg",
      category: "Pre-Wedding",
      title: "Portrait No. 12",
      aspect: "portrait",
    },
    {
      id: 49,
      src: "/images/IMG_5317.JPG.jpeg",
      category: "Portrait",
      title: "Cloud Break",
      aspect: "portrait",
    },
    {
      id: 50,
      src: "/images/IMG_5338.JPG.jpeg",
      category: "Pre-Wedding",
      title: "Side Portrait",
      aspect: "square",
    },
    {
      id: 51,
      src: "/images/IMG_5339.JPG.jpeg",
      category: "Pre-Wedding",
      title: "Depth III",
      aspect: "portrait",
    },

    {
      id: 1,
      src: "/images/pics (1).JPG",
      category: "Portrait",
      title: "Solitude I",
      aspect: "portrait",
    },
    {
      id: 2,
      src: "/images/pics (2).JPG",
      category: "Portrait",
      title: "City Pulse",
      aspect: "square",
    },
    {
      id: 3,
      src: "/images/pics (3).JPG",
      category: "Portrait",
      title: "Portrait No. 1",
      aspect: "portrait",
    },
    {
      id: 4,
      src: "/images/pics (4).JPG",
      category: "Portrait",
      title: "Open Horizon",
      aspect: "portrait",
    },
    {
      id: 5,
      src: "/images/pics (5).JPG",
      category: "Portrait",
      title: "Solitude II",
      aspect: "portrait",
    },
    {
      id: 6,
      src: "/images/pics (6).JPG",
      category: "Portrait",
      title: "Corner Light",
      aspect: "square",
    },
    {
      id: 7,
      src: "/images/pics (7).JPG",
      category: "Portrait",
      title: "Portrait No. 2",
      aspect: "portrait",
    },
    {
      id: 8,
      src: "/images/pics (8).JPG",
      category: "Portrait",
      title: "Still Water",
      aspect: "portrait",
    },
    {
      id: 9,
      src: "/images/pics (9).JPG",
      category: "Portrait",
      title: "Dusk Portrait",
      aspect: "portrait",
    },
    {
      id: 10,
      src: "/images/pics (10).JPG",
      category: "Portrait",
      title: "Passage",
      aspect: "square",
    },
    {
      id: 11,
      src: "/images/pics (11).JPG",
      category: "Portrait",
      title: "Portrait No. 3",
      aspect: "portrait",
    },
    {
      id: 12,
      src: "/images/pics (12).JPG",
      category: "Portrait",
      title: "Golden Hour",
      aspect: "portrait",
    },
    {
      id: 13,
      src: "/images/pics (13).JPG",
      category: "Portrait",
      title: "Quiet Gaze",
      aspect: "portrait",
    },
    {
      id: 14,
      src: "/images/pics (14).JPG",
      category: "Portrait",
      title: "Midday Rush",
      aspect: "square",
    },
    {
      id: 15,
      src: "/images/pics (16).JPG",
      category: "Portrait",
      title: "Portrait No. 4",
      aspect: "portrait",
    },
    {
      id: 16,
      src: "/images/pics (17).JPG",
      category: "Portrait",
      title: "Vast Plain",
      aspect: "portrait",
    },
    {
      id: 17,
      src: "/images/pics (18).JPG",
      category: "Portrait",
      title: "Soft Light",
      aspect: "portrait",
    },
    {
      id: 18,
      src: "/images/pics (19).JPG",
      category: "Portrait",
      title: "Night Walk",
      aspect: "square",
    },

    // ── pic series ───────────────────────────────────────────────────────────
    {
      id: 19,
      src: "/images/pic (1).JPG",
      category: "Portrait",
      title: "Portrait No. 5",
      aspect: "portrait",
    },
    {
      id: 20,
      src: "/images/pic (2).JPG",
      category: "Portrait",
      title: "Shadow Play",
      aspect: "portrait",
    },
    {
      id: 21,
      src: "/images/pic (3).JPG",
      category: "Portrait",
      title: "Urban Geometry",
      aspect: "portrait",
    },
    {
      id: 22,
      src: "/images/pic (4).JPG",
      category: "Portrait",
      title: "In Transit",
      aspect: "square",
    },

    // ── IMG series ───────────────────────────────────────────────────────────

    {
      id: 24,
      src: "/images/IMG_1868.JPG.jpeg",
      category: "Portrait",
      title: "Portrait No. 6",
      aspect: "portrait",
    },
    {
      id: 25,
      src: "/images/IMG_1869.JPG.jpeg",
      category: "Portrait",
      title: "Wide Open",
      aspect: "portrait",
    },
    {
      id: 26,
      src: "/images/IMG_2767.PNG",
      category: "Portrait",
      title: "Still Frame",
      aspect: "square",
    },
  ],
  email: "souldaniel69@gmail.com",
  social: {
    instagram: "@alexmonroe",
    twitter: "https://x.com/blak_naira?s=21",
    tiktok:
      "https://www.tiktok.com/@blak.naira.photography?_r=1&_t=ZS-95cVsYPbrjo",
  },
};

export default placeholder;
