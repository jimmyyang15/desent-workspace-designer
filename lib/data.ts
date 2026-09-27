import { WorkspaceItem } from "./types";

export const desks: WorkspaceItem[] = [
  {
    id: "desk-electric",
    slug: "electric-standing",
    name: "Electric Standing Desk",
    price: 8,
    image: "/assets/desk-electric.jpeg",
    category: "desk",
    position: { top: "58%", left: "5%", width: "90%", z: 20 },
  },
  {
    id: "desk-mechanical",
    slug: "mechanical",
    name: "Mechanical Desk",
    price: 5,
    image: "/assets/desk-mechanical.jpeg",
    category: "desk",
    position: { top: "58%", left: "5%", width: "90%", z: 20 },
  },
];

export const chairs: WorkspaceItem[] = [
  {
    id: "chair-mesh",
    slug: "ergonomic-mesh",
    name: "Ergonomic Mesh Chair",
    price: 4,
    image: "/assets/chair-mesh.jpeg",
    category: "chair",
    position: { top: "45%", left: "38%", width: "26%", z: 10 },
  },
  {
    id: "chair-fabric",
    slug: "ergonomic-fabric",
    name: "Ergonomic Fabric Chair",
    price: 4,
    image: "/assets/chair-fabric.jpeg",
    category: "chair",
    position: { top: "45%", left: "38%", width: "26%", z: 10 },
  },
];

export const accessories: WorkspaceItem[] = [
  {
    id: "monitor",
    slug: "monitor",
    name: "Monitor",
    price: 3,
    image: "/assets/monitor.jpeg",
    category: "accessory",
    position: { top: "22%", left: "42%", width: "16%", z: 30 },
  },
  {
    id: "lamp",
    slug: "lamp",
    name: "Desk Lamp",
    price: 1,
    image: "/assets/lamp.jpeg",
    category: "accessory",
    position: { top: "30%", left: "70%", width: "12%", z: 30 },
  },
  {
    id: "plant",
    slug: "plant",
    name: "Plant",
    price: 1,
    image: "/assets/plant.jpeg",
    category: "accessory",
    position: { top: "35%", left: "18%", width: "10%", z: 30 },
  },
];

export const allItems = [...desks, ...chairs, ...accessories];
export const findBySlug = (slug: string) => allItems.find((i) => i.slug === slug);