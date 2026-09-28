"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Position, WorkspaceItem } from "@/lib/types";

export function PreviewItem({ item,position }: { item: WorkspaceItem,position:Partial<Position> }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute"
      style={{
        bottom: position.bottom,
        left: position.left,
        width: position.width,
        height: position.height,
        zIndex: position.z,
      }}
    >
      <Image src={item.image} alt={item.name} width={400} height={400} className="w-full h-auto drop-shadow-lg" />
    </motion.div>
  );
}