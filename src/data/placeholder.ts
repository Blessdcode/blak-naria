export interface GalleryItem {
  id: number;
  src: string;
  category: "Portrait" | "Landscape" | "Street" | "Editorial";
  title: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface SocialLinks {
  instagram: string;
  twitter: string;
  linkedin: string;
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
    {
      id: 1,
      src: "https://i.ibb.co/vxPWd8p5/pics-19.jpg",
      category: "Portrait",
      title: "Solitude I",
      aspect: "portrait",
    },
    {
      id: 2,
      src: "https://i.ibb.co/nqqjs3MQ/pics-13.jpg",
      category: "Landscape",
      title: "Golden Hour",
      aspect: "landscape",
    },
    {
      id: 3,
      src: "https://i.ibb.co/rRhQvrbC/pics-1.jpg",
      category: "Portrait",
      title: "Urban Geometry",
      aspect: "square",
    },
    {
      id: 4,
      src: "https://i.ibb.co/zWkrTc3Y/pic-1.jpg",
      category: "Editorial",
      title: "Editorial No. 4",
      aspect: "portrait",
    },
    {
      id: 5,
      src: "https://i.ibb.co/21fRDmCh/pics-14.jpg",
      category: "Landscape",
      title: "Still Water",
      aspect: "landscape",
    },
    {
      id: 6,
      src: "https://picsum.photos/seed/am6/850/1150",
      category: "Portrait",
      title: "Solitude II",
      aspect: "portrait",
    },
    {
      id: 7,
      src: "https://picsum.photos/seed/am7/950/950",
      category: "Street",
      title: "Corner Light",
      aspect: "square",
    },
    {
      id: 8,
      src: "https://picsum.photos/seed/am8/1000/680",
      category: "Editorial",
      title: "Editorial No. 8",
      aspect: "landscape",
    },
    {
      id: 9,
      src: "https://picsum.photos/seed/am9/780/1080",
      category: "Portrait",
      title: "Dusk Portrait",
      aspect: "portrait",
    },
    {
      id: 10,
      src: "https://picsum.photos/seed/am10/1200/820",
      category: "Landscape",
      title: "Open Horizon",
      aspect: "landscape",
    },
    {
      id: 11,
      src: "https://picsum.photos/seed/am11/870/870",
      category: "Street",
      title: "Passage",
      aspect: "square",
    },
    {
      id: 12,
      src: "https://picsum.photos/seed/am12/740/1100",
      category: "Editorial",
      title: "Editorial No. 12",
      aspect: "portrait",
    },
  ],
  email: "talktobmdesign@gmail.com",
  social: {
    instagram: "@alexmonroe",
    twitter: "@alexmonroe",
    linkedin: "alexmonroe",
  },
};

export default placeholder;
