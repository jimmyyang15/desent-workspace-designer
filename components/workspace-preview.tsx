"use client";

import { AnimatePresence } from "framer-motion";
import { WorkspaceItem } from "@/lib/types";
import { PreviewItem } from "@/components/preview-item";

interface Props {
  desk: WorkspaceItem;
  chair: WorkspaceItem;
  selectedAccessories: WorkspaceItem[];
}

export function WorkspacePreview({ desk, chair, selectedAccessories }: Props) {
  return (
    <div className="relative w-full aspect-video bg-muted rounded-xl border border-border overflow-hidden">
      <AnimatePresence>
        <PreviewItem key={chair.id} item={chair} />
        <PreviewItem key={desk.id} item={desk} />
        {selectedAccessories.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </div>
  );
}