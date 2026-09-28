export type Category = "desk" | "chair" | "accessory";
export type Position = {
  bottom: string;
  left: string;
  width: string;
  height?: string;
  z: number;
};
export interface WorkspaceItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  position: Partial<Position>;
  backgroundPositions?: Record<string, Partial<Position>>;
}