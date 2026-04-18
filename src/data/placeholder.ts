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
  tagline: "Exploring Lights, Colors, and Shadows through photography",
  bio: [
    "Photography for me is not just about capturing a subject; it is a deliberate study of how light interacts with the world. Based in Benin City, Nigeria, I approach my craft with a deep fascination for the interplay of vibrant colors and deep, cinematic shadows. Whether framing the quiet dignity of a studio portrait or the sweeping scale of natural scenery, my goal is to elevate every frame into a compelling visual narrative.",
    "My work is defined by a commitment to high-end editorial aesthetics and uncompromising technical precision. I bring an analytical rigor to my art—mastering complex studio lighting setups, from classic Rembrandt to high-key illumination, and utilizing professional-grade equipment to achieve maximum fidelity. I am dedicated to preserving the 100% authentic identity and intricate textures of my subjects, ensuring every nuance is rendered with striking, high-resolution clarity.",
    "At Blak Naira Photography, the focus is on bridging the gap between raw, vibrant Nigerian life and flawless, disciplined execution. Every session is an opportunity to experiment, refine, and deliver timeless, cinematic imagery that speaks for itself.",
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
      src: "https://i.ibb.co/0R7XFVqt/pics-19.jpg",
      category: "Portrait",
      title: "Night Walk",
      aspect: "square",
    },

    {
      id: 39,
      src: "https://i.ibb.co/605tx9gm/IMG-4876-JPG.jpg",
      category: "Landscape",
      title: "Close Study",
      aspect: "landscape",
    },
    {
      id: 1,
      src: "https://i.ibb.co/F21xGsK/pics-1.jpg",
      category: "Portrait",
      title: "Solitude I",
      aspect: "portrait",
    },
    {
      id: 47,
      src: "https://i.ibb.co/7drwhq7y/IMG-5208-JPG.jpg",
      category: "Portrait",
      title: "Depth II",
      aspect: "portrait",
    },
    {
      id: 53,
      src: "https://i.ibb.co/nMtnrQkP/IMG-5423-JPG.jpg",
      category: "Portrait",
      title: "Skyline",
      aspect: "portrait",
    },

    // ── misc ─────────────────────────────────────────────────────────────────
    {
      id: 54,
      src: "https://i.ibb.co/pvwX014b/where.jpg",
      category: "Portrait",
      title: "Somewhere",
      aspect: "square",
    },

    {
      id: 28,
      src: "https://i.ibb.co/spcb8n5c/IMG-3300-JPG.jpg",
      category: "Pre-Wedding",
      title: "Pre-Wedding No. 7",
      aspect: "portrait",
    },
    {
      id: 29,
      src: "https://i.ibb.co/qv2S47k/IMG-4040-JPG.jpg",
      category: "Pre-Wedding",
      title: "Horizon Line",
      aspect: "portrait",
    },

    {
      id: 32,
      src: "https://i.ibb.co/N65g6cqX/IMG-4530-JPG.jpg",
      category: "Portrait",
      title: "Portrait No. 8",
      aspect: "portrait",
    },
    {
      id: 33,
      src: "https://i.ibb.co/FLWK0pNB/IMG-4561-JPG.jpg",
      category: "Pre-Wedding",
      title: "Morning Mist",
      aspect: "portrait",
    },
    {
      id: 34,
      src: "https://i.ibb.co/6RjYD69t/IMG-4734-JPG.jpg",
      category: "Portrait",
      title: "After Rain",
      aspect: "square",
    },
    {
      id: 35,
      src: "https://i.ibb.co/s9Kx7hdX/IMG-4742-JPG.jpg",
      category: "Portrait",
      title: "Silhouette II",
      aspect: "portrait",
    },
    {
      id: 36,
      src: "https://i.ibb.co/WvRGc7zX/IMG-4747-JPG.jpg",
      category: "Portrait",
      title: "Portrait No. 9",
      aspect: "portrait",
    },
    {
      id: 37,
      src: "https://i.ibb.co/Zqzqrp5/IMG-4750-JPG.jpg",
      category: "Portrait",
      title: "Flat Earth",
      aspect: "portrait",
    },
    {
      id: 38,
      src: "https://i.ibb.co/0y4YjVz9/IMG-4753-JPG.jpg",
      category: "Portrait",
      title: "Under Neon",
      aspect: "square",
    },
    {
      id: 52,
      src: "https://i.ibb.co/PshpWVrJ/IMG-5344-JPG.jpg",
      category: "Pre-Wedding",
      title: "Portrait No. 13",
      aspect: "portrait",
    },

    {
      id: 40,
      src: "https://i.ibb.co/60LQXdtP/IMG-4878-JPG.jpg",
      category: "Landscape",
      title: "Landscape No. 10",
      aspect: "landscape",
    },
    {
      id: 41,
      src: "https://i.ibb.co/qFrSP0zd/IMG-4979-JPG.jpg",
      category: "Portrait",
      title: "Long Exposure",
      aspect: "portrait",
    },
    {
      id: 42,
      src: "https://i.ibb.co/JjVWbDnL/IMG-4996-JPG.jpg",
      category: "Portrait",
      title: "Between Steps",
      aspect: "square",
    },
    {
      id: 43,
      src: "https://i.ibb.co/RGDM7S6H/IMG-5135-JPG.jpg",
      category: "Portrait",
      title: "Depth I",
      aspect: "portrait",
    },
    {
      id: 44,
      src: "https://i.ibb.co/4wPLz0hW/IMG-5139-JPG.jpg",
      category: "Portrait",
      title: "Portrait No. 11",
      aspect: "portrait",
    },
    {
      id: 45,
      src: "https://i.ibb.co/YFmhRTSB/IMG-5141-JPG.jpg",
      category: "Portrait",
      title: "Dusk Fields",
      aspect: "portrait",
    },
    {
      id: 46,
      src: "https://i.ibb.co/qYhL2J9N/IMG-5207-JPG.jpg",
      category: "Portrait",
      title: "Overpass",
      aspect: "square",
    },

    {
      id: 48,
      src: "https://i.ibb.co/vCVrD8bb/IMG-5233-JPG.jpg",
      category: "Pre-Wedding",
      title: "Portrait No. 12",
      aspect: "portrait",
    },
    {
      id: 49,
      src: "https://i.ibb.co/4R6m80QC/IMG-5317-JPG.jpg",
      category: "Portrait",
      title: "Cloud Break",
      aspect: "portrait",
    },
    {
      id: 50,
      src: "https://i.ibb.co/7NgPyvBt/IMG-5338-JPG.jpg",
      category: "Pre-Wedding",
      title: "Side Portrait",
      aspect: "square",
    },
    {
      id: 51,
      src: "https://i.ibb.co/sv8y7m1Z/IMG-5339-JPG.jpg",
      category: "Pre-Wedding",
      title: "Depth III",
      aspect: "portrait",
    },

    {
      id: 2,
      src: "https://i.ibb.co/Z6XVCr0y/pics-2.jpg",
      category: "Portrait",
      title: "City Pulse",
      aspect: "square",
    },
    {
      id: 3,
      src: "https://i.ibb.co/cKt69hh3/pics-3.jpg",
      category: "Portrait",
      title: "Portrait No. 1",
      aspect: "portrait",
    },
    {
      id: 4,
      src: "https://i.ibb.co/5hDqQZTn/pics-4.jpg",
      category: "Portrait",
      title: "Open Horizon",
      aspect: "portrait",
    },
    {
      id: 5,
      src: "https://i.ibb.co/M5cbPS3r/pics-5.jpg",
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
      src: "https://i.ibb.co/QvDwt09n/pics-7.jpg",
      category: "Portrait",
      title: "Portrait No. 2",
      aspect: "portrait",
    },
    {
      id: 8,
      src: "https://i.ibb.co/JjYgxr9H/pics-8.jpg",
      category: "Portrait",
      title: "Still Water",
      aspect: "portrait",
    },
    {
      id: 9,
      src: "https://i.ibb.co/2YMgRtqL/pics-9.jpg",
      category: "Portrait",
      title: "Dusk Portrait",
      aspect: "portrait",
    },
    {
      id: 10,
      src: "https://i.ibb.co/fzz5fn88/pics-10.jpg",
      category: "Portrait",
      title: "Passage",
      aspect: "square",
    },
    {
      id: 11,
      src: "https://i.ibb.co/HLj6vPDd/pics-11.jpg",
      category: "Portrait",
      title: "Portrait No. 3",
      aspect: "portrait",
    },
    {
      id: 12,
      src: "https://i.ibb.co/pvcPm4MH/pics-12.jpg",
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
      src: "https://i.ibb.co/zVKMCw14/pics-14.jpg",
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
      src: "https://i.ibb.co/W4x4WtBs/pics-17.jpg",
      category: "Portrait",
      title: "Vast Plain",
      aspect: "portrait",
    },
    {
      id: 17,
      src: "https://i.ibb.co/zVsqt3LN/pics-18.jpg.jpg",
      category: "Portrait",
      title: "Soft Light",
      aspect: "portrait",
    },

    // ── pic series ───────────────────────────────────────────────────────────
    {
      id: 19,
      src: "https://i.ibb.co/4RW85Bdg/pic-1.jpg",
      category: "Portrait",
      title: "Portrait No. 5",
      aspect: "portrait",
    },
    {
      id: 20,
      src: "https://i.ibb.co/6RZbTW2W/pic-2.jpg",
      category: "Portrait",
      title: "Shadow Play",
      aspect: "portrait",
    },
    {
      id: 21,
      src: "https://i.ibb.co/F21xGsK/pics-1.jpg",
      category: "Portrait",
      title: "Urban Geometry",
      aspect: "portrait",
    },
    {
      id: 22,
      src: "https://i.ibb.co/TD6tsqcw/pic-4.jpg",
      category: "Portrait",
      title: "In Transit",
      aspect: "square",
    },

    // ── IMG series ───────────────────────────────────────────────────────────

    {
      id: 24,
      src: "https://i.ibb.co/3myW8FCM/IMG-1868-JPG.jpg",
      category: "Portrait",
      title: "Portrait No. 6",
      aspect: "portrait",
    },
    {
      id: 25,
      src: "https://i.ibb.co/21nvsgZ8/IMG-1869-JPG.jpg",
      category: "Portrait",
      title: "Wide Open",
      aspect: "portrait",
    },
    {
      id: 26,
      src: "https://i.ibb.co/chZWVst7/IMG-2767.jpg",
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
