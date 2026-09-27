"use client";

import { WorkspaceItem } from "@/lib/types";
import { useLocalStorage } from "@/hooks/use-local-storage";

export interface CheckoutRecord {
  desk: WorkspaceItem;
  chair: WorkspaceItem;
  accessories: WorkspaceItem[];
  total: number;
  createdAt: string;
}

export function useCheckout() {
  const [lastOrder, setLastOrder] = useLocalStorage<CheckoutRecord | null>("monis-last-order", null);

  const submitOrder = (record: Omit<CheckoutRecord, "createdAt">) => {
    setLastOrder({ ...record, createdAt: new Date().toISOString() });
  };

  return { lastOrder, submitOrder };
}