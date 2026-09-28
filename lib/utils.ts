import { Position, WorkspaceItem } from "@/lib/types";

export { cn } from "cn"
export function getItemPosition(item: WorkspaceItem, currentBgId?: string): Partial<Position> {
  if (!currentBgId || !item.backgroundPositions?.[currentBgId]) {
    return item.position;
  }

  return {
    ...item.position,
    ...item.backgroundPositions[currentBgId],
  };
}