"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WorkspaceItem } from "@/lib/types";

export function PreviewItem({ item }: { item: WorkspaceItem }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute"
      style={{
        bottom: item.position.bottom,
        left: item.position.left,
        width: item.position.width,
        zIndex: item.position.z,
      }}
    >
      <Image src={item.image} alt={item.name} width={400} height={400} className="w-full h-auto drop-shadow-lg" />
    </motion.div>
  );
}