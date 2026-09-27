"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { desks, chairs, accessories, findBySlug } from "@/lib/data";
import { WorkspaceItem } from "@/lib/types";

export function useWorkspaceSelection() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const deskSlug = params.get("desk") ?? desks[0].slug;
  const chairSlug = params.get("chair") ?? chairs[0].slug;
  const accessorySlugs = params.get("acc")?.split(",").filter(Boolean) ?? [];

  const selectedDesk = useMemo(() => findBySlug(deskSlug) ?? desks[0], [deskSlug]);
  const selectedChair = useMemo(() => findBySlug(chairSlug) ?? chairs[0], [chairSlug]);
  const selectedAccessories = useMemo(
    () => accessorySlugs.map(findBySlug).filter((i): i is WorkspaceItem => Boolean(i)),
    [accessorySlugs.join(",")]
  );

  const updateParams = useCallback(
    (next: Record<string, string>) => {
      const merged = new URLSearchParams(params.toString());
      Object.entries(next).forEach(([key, value]) => {
        if (value) merged.set(key, value);
        else merged.delete(key);
      });
      router.replace(`${pathname}?${merged.toString()}`, { scroll: false });
    },
    [params, pathname, router]
  );

  const setDesk = useCallback((item: WorkspaceItem) => updateParams({ desk: item.slug }), [updateParams]);
  const setChair = useCallback((item: WorkspaceItem) => updateParams({ chair: item.slug }), [updateParams]);

  const toggleAccessory = useCallback(
    (item: WorkspaceItem) => {
      const next = accessorySlugs.includes(item.slug)
        ? accessorySlugs.filter((s) => s !== item.slug)
        : [...accessorySlugs, item.slug];
      updateParams({ acc: next.join(",") });
    },
    [accessorySlugs, updateParams]
  );

  const totalPrice =
    selectedDesk.price + selectedChair.price + selectedAccessories.reduce((sum, i) => sum + i.price, 0);

  return {
    desks,
    chairs,
    accessories,
    selectedDesk,
    selectedChair,
    selectedAccessories,
    setDesk,
    setChair,
    toggleAccessory,
    totalPrice,
  };
}