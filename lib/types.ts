export type Category = "desk" | "chair" | "accessory";

export interface WorkspaceItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  position: { top: string; left: string; width: string; z: number };
}