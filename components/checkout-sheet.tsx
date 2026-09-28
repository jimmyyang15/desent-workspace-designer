"use client";

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { WorkspaceItem } from "@/lib/types";
import { useCheckout } from "@/hooks/use-checkout";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
interface Props {
  desk: WorkspaceItem;
  chair: WorkspaceItem;
  accessories: WorkspaceItem[];
  total: number;
}

export function CheckoutSheet({ desk, chair, accessories, total }: Props) {
  const { submitOrder } = useCheckout();

  const { theme } = useTheme()
  console.log("Theme: ", theme)
  return (
    <Sheet>
      <SheetTrigger>
        <Button className='relative rounded-md w-full h-10 overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'>
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
            <RainbowButton
              className="mt-4 w-full text-black dark:text-white"
              onClick={() => submitOrder({ desk, chair, accessories, total })}
            >
              Rent your setup
            </RainbowButton>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}