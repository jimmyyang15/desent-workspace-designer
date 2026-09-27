"use client";

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { WorkspaceItem } from "@/lib/types";
import { useCheckout } from "@/hooks/use-checkout";

interface Props {
  desk: WorkspaceItem;
  chair: WorkspaceItem;
  accessories: WorkspaceItem[];
  total: number;
}

export function CheckoutSheet({ desk, chair, accessories, total }: Props) {
  const { submitOrder } = useCheckout();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center justify-center gap-2">
          <ShoppingBag className="w-4 h-4" /> View setup (${total})
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background border-border">
        <SheetHeader>
          <SheetTitle className="text-foreground">Setup breakdown</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          {[desk, chair, ...accessories].map((item) => (
            <div key={item.id} className="flex justify-between text-sm border-b border-border p-4">
              <span className="text-muted-foreground">{item.name}</span>
              <span className="text-foreground font-medium">${item.price}</span>
            </div>
          ))}
          <div className="px-4">
   <div className="flex justify-between pt-4 text-primary font-semibold">
            <span>Total</span>
            <span>${total}/week</span>
          </div>
          <Button
            className="w-full mt-4  bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => submitOrder({ desk, chair, accessories, total })}
          >
            Rent your setup
          </Button>
          </div>
       
        </div>
      </SheetContent>
    </Sheet>
  );
}