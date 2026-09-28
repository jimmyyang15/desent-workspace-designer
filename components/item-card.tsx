"use client";

import { Check, Plus } from "lucide-react";
import { WorkspaceItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  item: WorkspaceItem;
  selected: boolean;
  onSelect: (item: WorkspaceItem) => void;
}

export function ItemCard({ item, selected, onSelect }: Props) {
  return (
    <Button
      onClick={() => onSelect(item)}
      variant="outline"
      className={cn(
        "w-full flex items-center h-14 justify-between p-4 rounded-xl border transition-colors text-left",
        selected ? "border-primary bg-card" : "border-border bg-background hover:border-primary/50"
      )}
    >
      <div>
        <p className="text-sm font-medium text-foreground">{item.name}</p>
        <p className="text-xs text-muted-foreground">${item.price}/week</p>
      </div>
      {selected ? <Check className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-muted-foreground" />}
    </Button>
  );
}