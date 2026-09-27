"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { WorkspaceItem } from "@/lib/types";
import { ItemCard } from "@/components/item-card";

interface Props {
  desks: WorkspaceItem[];
  chairs: WorkspaceItem[];
  accessories: WorkspaceItem[];
  selectedDesk: WorkspaceItem;
  selectedChair: WorkspaceItem;
  selectedAccessories: WorkspaceItem[];
  onSelectDesk: (item: WorkspaceItem) => void;
  onSelectChair: (item: WorkspaceItem) => void;
  onToggleAccessory: (item: WorkspaceItem) => void;
}

export function SelectionPanel({
  desks,
  chairs,
  accessories,
  selectedDesk,
  selectedChair,
  selectedAccessories,
  onSelectDesk,
  onSelectChair,
  onToggleAccessory,
}: Props) {
  return (
    <Tabs defaultValue="desk" className="flex-1 flex flex-col">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="desk">Desks</TabsTrigger>
        <TabsTrigger value="chair">Chairs</TabsTrigger>
        <TabsTrigger value="accessories">Extras</TabsTrigger>
      </TabsList>

      <TabsContent value="desk" className="mt-4 space-y-3">
        {desks.map((item) => (
          <ItemCard key={item.id} item={item} selected={selectedDesk.id === item.id} onSelect={onSelectDesk} />
        ))}
      </TabsContent>

      <TabsContent value="chair" className="mt-4 space-y-3">
        {chairs.map((item) => (
          <ItemCard key={item.id} item={item} selected={selectedChair.id === item.id} onSelect={onSelectChair} />
        ))}
      </TabsContent>

      <TabsContent value="accessories" className="mt-4 space-y-3">
        {accessories.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            selected={selectedAccessories.some((a) => a.id === item.id)}
            onSelect={onToggleAccessory}
          />
        ))}
      </TabsContent>
    </Tabs>
  );
}