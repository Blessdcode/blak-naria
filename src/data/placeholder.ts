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
  whatsapp:string
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
      id: 31,
      src: "/images/optimized/IMG_4506.JPG.jpg",
      category: "Pre-Wedding",
      title: "Silhouette I",
      aspect: "portrait",
    },
    {
      id: 18,
      src: "/images/optimized/pics (19).jpg",
      category: "Portrait",
      title: "Night Walk",
      aspect: "square",
    },

    {
      id: 39,
      src: "/images/optimized/IMG_4876.JPG.jpg",
      category: "Landscape",
      title: "Close Study",
      aspect: "landscape",
    },
    {
      id: 1,
      src: "/images/optimized/pics (1).jpg",
      category: "Portrait",
      title: "Solitude I",
      aspect: "portrait",
    },
    {
      id: 47,
      src: "/images/optimized/IMG_5208.JPG.jpg",
      category: "Portrait",
      title: "Depth II",
      aspect: "portrait",
    },
    {
      id: 53,
      src: "/images/optimized/IMG_5423.JPG.jpg",
      category: "Portrait",
      title: "Skyline",
      aspect: "portrait",
    },

    // ── misc ─────────────────────────────────────────────────────────────────
    {
      id: 54,
      src: "/images/optimized/where.jpg",
      category: "Portrait",
      title: "Somewhere",
      aspect: "square",
    },

    {
      id: 28,
      src: "/images/optimized/IMG_3300.JPG.jpg",
      category: "Pre-Wedding",
      title: "Pre-Wedding No. 7",
      aspect: "portrait",
    },
    {
      id: 29,
      src: "/images/optimized/IMG_4040.JPG.jpg",
      category: "Pre-Wedding",
      title: "Horizon Line",
      aspect: "portrait",
    },

    {
      id: 32,
      src: "/images/optimized/IMG_4530.JPG.jpg",
      category: "Portrait",
      title: "Portrait No. 8",
      aspect: "portrait",
    },
    {
      id: 33,
      src: "/images/optimized/IMG_4561.JPG.jpg",
      category: "Pre-Wedding",
      title: "Morning Mist",
      aspect: "portrait",
    },
    {
      id: 34,
      src: "/images/optimized/IMG_4734.JPG.jpg",
      category: "Portrait",
      title: "After Rain",
      aspect: "square",
    },
    {
      id: 35,
      src: "/images/optimized/IMG_4742.JPG.jpg",
      category: "Portrait",
      title: "Silhouette II",
      aspect: "portrait",
    },
    {
      id: 36,
      src: "/images/optimized/IMG_4747.JPG.jpg",
      category: "Portrait",
      title: "Portrait No. 9",
      aspect: "portrait",
    },
    {
      id: 37,
      src: "/images/optimized/IMG_4750.JPG.jpg",
      category: "Portrait",
      title: "Flat Earth",
      aspect: "portrait",
    },
    {
      id: 38,
      src: "/images/optimized/IMG_4753.JPG.jpg",
      category: "Portrait",
      title: "Under Neon",
      aspect: "square",
    },
    {
      id: 52,
      src: "/images/optimized/IMG_5344.JPG.jpg",
      category: "Pre-Wedding",
      title: "Portrait No. 13",
      aspect: "portrait",
    },

    {
      id: 40,
      src: "/images/optimized/IMG_4878.JPG.jpg",
      category: "Landscape",
      title: "Landscape No. 10",
      aspect: "landscape",
    },
    {
      id: 41,
      src: "/images/optimized/IMG_4979.JPG.jpg",
      category: "Portrait",
      title: "Long Exposure",
      aspect: "portrait",
    },
    {
      id: 42,
      src: "/images/optimized/IMG_4996.JPG.jpg",
      category: "Portrait",
      title: "Between Steps",
      aspect: "square",
    },
    {
      id: 43,
      src: "/images/optimized/IMG_5135.JPG.jpg",
      category: "Portrait",
      title: "Depth I",
      aspect: "portrait",
    },
    {
      id: 44,
      src: "/images/optimized/IMG_5139.JPG.jpg",
      category: "Portrait",
      title: "Portrait No. 11",
      aspect: "portrait",
    },
    {
      id: 45,
      src: "/images/optimized/IMG_5141.JPG.jpg",
      category: "Portrait",
      title: "Dusk Fields",
      aspect: "portrait",
    },
    {
      id: 46,
      src: "/images/optimized/IMG_5207.JPG.jpg",
      category: "Portrait",
      title: "Overpass",
      aspect: "square",
    },

    {
      id: 48,
      src: "/images/optimized/IMG_5233.JPG.jpg",
      category: "Pre-Wedding",
      title: "Portrait No. 12",
      aspect: "portrait",
    },
    {
      id: 49,
      src: "/images/optimized/IMG_5317.JPG.jpg",
      category: "Portrait",
      title: "Cloud Break",
      aspect: "portrait",
    },
    {
      id: 50,
      src: "/images/optimized/IMG_5338.JPG.jpg",
      category: "Pre-Wedding",
      title: "Side Portrait",
      aspect: "square",
    },
    {
      id: 51,
      src: "/images/optimized/IMG_5339.JPG.jpg",
      category: "Pre-Wedding",
      title: "Depth III",
      aspect: "portrait",
    },

    {
      id: 2,
      src: "/images/optimized/pics (2).jpg",
      category: "Portrait",
      title: "City Pulse",
      aspect: "square",
    },
    {
      id: 3,
      src: "/images/optimized/pics (3).jpg",
      category: "Portrait",
      title: "Portrait No. 1",
      aspect: "portrait",
    },
    {
      id: 4,
      src: "/images/optimized/pics (4).jpg",
      category: "Portrait",
      title: "Open Horizon",
      aspect: "portrait",
    },
    {
      id: 5,
      src: "/images/optimized/pics (5).jpg",
      category: "Portrait",
      title: "Solitude II",
      aspect: "portrait",
    },
    {
      id: 6,
      src: "/images/optimized/pics (6).jpg",
      category: "Portrait",
      title: "Corner Light",
      aspect: "square",
    },
    {
      id: 7,
      src: "/images/optimized/pics (7).jpg",
      category: "Portrait",
      title: "Portrait No. 2",
      aspect: "portrait",
    },
    {
      id: 8,
      src: "/images/optimized/pics (8).jpg",
      category: "Portrait",
      title: "Still Water",
      aspect: "portrait",
    },
    {
      id: 9,
      src: "/images/optimized/pics (9).jpg",
      category: "Portrait",
      title: "Dusk Portrait",
      aspect: "portrait",
    },
    {
      id: 10,
      src: "/images/optimized/pics (10).jpg",
      category: "Portrait",
      title: "Passage",
      aspect: "square",
    },
    {
      id: 11,
      src: "/images/optimized/pics (11).jpg",
      category: "Portrait",
      title: "Portrait No. 3",
      aspect: "portrait",
    },
    {
      id: 12,
      src: "/images/optimized/pics (12).jpg",
      category: "Portrait",
      title: "Golden Hour",
      aspect: "portrait",
    },
    {
      id: 13,
      src: "/images/optimized/pics (13).jpg",
      category: "Portrait",
      title: "Quiet Gaze",
      aspect: "portrait",
    },
    {
      id: 14,
      src: "/images/optimized/pics (14).jpg",
      category: "Portrait",
      title: "Midday Rush",
      aspect: "square",
    },
    {
      id: 15,
      src: "/images/optimized/pics (16).jpg",
      category: "Portrait",
      title: "Portrait No. 4",
      aspect: "portrait",
    },
    {
      id: 16,
      src: "/images/optimized/pics (17).jpg",
      category: "Portrait",
      title: "Vast Plain",
      aspect: "portrait",
    },
    {
      id: 17,
      src: "/images/optimized/pics (18).jpg",
      category: "Portrait",
      title: "Soft Light",
      aspect: "portrait",
    },

    // ── pic series ───────────────────────────────────────────────────────────
    {
      id: 19,
      src: "/images/optimized/pic (1).jpg",
      category: "Portrait",
      title: "Portrait No. 5",
      aspect: "portrait",
    },
    {
      id: 20,
      src: "/images/optimized/pic (2).jpg",
      category: "Portrait",
      title: "Shadow Play",
      aspect: "portrait",
    },
    {
      id: 21,
      src: "/images/optimized/pic (3).jpg",
      category: "Portrait",
      title: "Urban Geometry",
      aspect: "portrait",
    },
    {
      id: 22,
      src: "/images/optimized/pic (4).jpg",
      category: "Portrait",
      title: "In Transit",
      aspect: "square",
    },

    // ── IMG series ───────────────────────────────────────────────────────────

    {
      id: 24,
      src: "/images/optimized/IMG_1868.JPG.jpg",
      category: "Portrait",
      title: "Portrait No. 6",
      aspect: "portrait",
    },
    {
      id: 25,
      src: "/images/optimized/IMG_1869.JPG.jpg",
      category: "Portrait",
      title: "Wide Open",
      aspect: "portrait",
    },
    {
      id: 26,
      src: "/images/optimized/IMG_2767.jpg",
      category: "Portrait",
      title: "Still Frame",
      aspect: "square",
    },
  ],
  email: "souldaniel69@gmail.com",
  social: {
    instagram: "@blak_naira",
    twitter: "@blak_naira",
    tiktok: "@blak_naira.photography",
    whatsapp: "+234 803 123 4567",
  },
};

export default placeholder;
