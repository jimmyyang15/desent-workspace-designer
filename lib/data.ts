import { WorkspaceItem } from "@/lib/types";

export const desks: WorkspaceItem[] = [
  {
    id: "desk-electric",
    slug: "electric-standing",
    name: "Electric Standing Desk",
    price: 8,
    image: "/assets/electrical-desk.png",
    category: "desk",
    position: { bottom: "0%", right: "0", width: "60%", z: 20 }
  },
  {
    id: "desk-mechanical",
    slug: "mechanical",
    name: "Mechanical Desk",
    price: 5,
    image: "/assets/lshape-desk.png",
    category: "desk",
    position: { bottom: "0%", right: "0", width: "60%", z: 20 }
  },
];

export const chairs: WorkspaceItem[] = [
  {
    id: "chair-mesh",
    slug: "ergonomic-mesh",
    name: "Ergonomic Mesh Chair",
    price: 4,
    image: "/assets/office-chair.png",
    category: "chair",
    position: { bottom: "0", left: "0", width: "45%", z: 30 }
  },
  {
    id: "gaming-chair",
    slug: "ergonomic-gaming",
    name: "Ergonomic Gaming Chair",
    price: 4,
    image: "/assets/gaming-chair.png",
    category: "chair",
    position: { bottom: "0", left: "0", width: "45%", z: 30 }
  },
];

export const accessories: WorkspaceItem[] = [
  {
    id: "monitor",
    slug: "monitor",
    name: "Monitor",
    price: 3,
    image: "/assets/monitor.png",
    category: "accessory",
    position: { bottom: "12%", left: "10%", width: "40%", z: 30 } // monitor
  },
  {
    id: "lamp",
    slug: "lamp",
    name: "Desk Lamp",
    price: 1,
    image: "/assets/lamp.png",
    category: "accessory",
    position: { bottom: "36%", left: "20%", width: "10%", z: 20 },
  },
  {
    id: "plant",
    slug: "plant",
    name: "Plant",
    price: 1,
    image: "/assets/plant.png",
    category: "accessory",
    position: { bottom: "-8%", left: "30%", width: "60%", z: 30 },

  },
];

export const allItems = [...desks, ...chairs, ...accessories];
export const findBySlug = (slug: string) => allItems.find((i) => i.slug === slug);