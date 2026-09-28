export type Category = "desk" | "chair" | "accessory";

export interface WorkspaceItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  position: Partial<{ bottom: string; left: string; width: string; z: number; top: string; right: string }>;
}