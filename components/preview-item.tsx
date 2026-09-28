"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WorkspaceItem } from "@/lib/types";
import { getItemPosition } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export function PreviewItem({ item,containerRef }: { item: WorkspaceItem,containerRef?: React.RefObject<HTMLDivElement | null>; }) {
 
 const searchParams = useSearchParams();
  const activeBgId = searchParams.get('bg') || 'bali-villa';
  const position = getItemPosition(item, activeBgId);
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      drag
      dragConstraints={containerRef} 
      dragElastic={0.05} 
      dragMomentum={false}
      whileDrag={{ scale: 1.05 }} 
      className="absolute cursor-grab active:cursor-grabbing group"

      style={{
        bottom: position.bottom,
        left: position.left,
        width: position.width,
        height: position.height,
        zIndex: position.z,
      }}
    >
      <Image draggable={false} src={item.image} alt={item.name} width={400} height={400} className="w-full h-auto drop-shadow-lg" />
    </motion.div>
  );
}