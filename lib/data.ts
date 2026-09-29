import { WorkspaceItem } from "@/lib/types";

export const desks: WorkspaceItem[] = [
  {
    id: "desk-electric",
    slug: "electric-standing",
    name: "Electric Standing Desk",
    price: 8,
    image: "/assets/electrical-desk.png",
    category: "desk",
    position: { bottom: "0", left: "10%", width: "75%",z: 10 }
  },
  {
    id: "desk-mechanical",
    slug: "mechanical",
    name: "Mechanical Desk",
    price: 10,
    image: "/assets/lshape-desk.png",
    category: "desk",
    position: { bottom: "0", left: "10%", width: "75%", z: 10 }
  },
];

export const chairs: WorkspaceItem[] = [
  {
    id: "chair-mesh",
    slug: "ergonomic-mesh",
    name: "Ergonomic Mesh Chair",
    price: 6,
    image: "/assets/office-chair.png",
    category: "chair",
    position: { bottom: "0", left: "30%", width: "22%", z: 20 }
  },
  {
    id: "gaming-chair",
    slug: "ergonomic-gaming",
    name: "Ergonomic Gaming Chair",
    price: 6,
    image: "/assets/gaming-chair.png",
    category: "chair",
    position: { bottom: "0", left: "30%", width: "22%", z: 20 }
  },
];

export const accessories: WorkspaceItem[] = [
  {
    id: "monitor",
    slug: "monitor",
    name: "Monitor",
    price: 5,
    image: "/assets/monitor.png",
    category: "accessory",
    position: { bottom: "45%", left: "45%", width: "20%", z: 30 } // monitor
  },
  {
    id: "lamp",
    slug: "lamp",
    name: "Desk Lamp",
    price: 2,
    image: "/assets/lamp.png",
    category: "accessory",
    position: { bottom: "43%", left: "60%", width: "10%", z: 10 },
  },
  {
    id: "plant",
    slug: "plant",
    name: "Plant",
    price: 1,
    image: "/assets/plant.png",
    category: "accessory",
    position: { bottom: "45%", left: "40%", width: "10%", z: 10 },

  },
  {
    id:"coffee-machine",
    slug:'coffee-machine',
    name:"Coffee Machine",
    price:7,
    image:"/assets/coffee-machine.png",
    category:'accessory',
    position: { bottom: "40%", left: "70%", width: "25%", z: 5 },
    backgroundPositions: {
      "rice-terrace": { bottom: "38%", left: "78%", width: "24%"},
      "bali-villa": { bottom: "25%", left: "75%", width: "24%" },
      "minimalistic-studio": { bottom: "35%", left: "68%", width: "24%" },
    },
  }
];
export const backgrounds = [
  {
    id: 'bali-villa',
    name: 'Bali Villa',
    src: '/assets/bali-villa-bg.jpeg',
  },
  {
    id: 'minimalistic-studio',
    name: 'Minimalistic Studio',
    src: '/assets/minimalistic-studio-bg.jpeg',
  },
  {
    id: 'rice-terrace-loft',
    name: 'Rice Terrace Loft',
    src: '/assets/rice-terrace-bg.jpeg',
  },
] as const;

export const allItems = [...desks, ...chairs, ...accessories];
export const findBySlug = (slug: string) => allItems.find((i) => i.slug === slug);