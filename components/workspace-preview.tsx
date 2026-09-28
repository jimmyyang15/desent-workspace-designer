"use client";

import { AnimatePresence } from "framer-motion";
import { WorkspaceItem } from "@/lib/types";
import { PreviewItem } from "@/components/preview-item";
import { useSearchParams } from "next/navigation";
import { backgrounds } from "@/lib/data";
import { useRef, useState } from "react";
import { toPng, toJpeg } from 'html-to-image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
interface Props {
  desk: WorkspaceItem;
  chair: WorkspaceItem;
  selectedAccessories: WorkspaceItem[];
}

export function WorkspacePreview({ desk, chair, selectedAccessories }: Props) {
    const previewRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const searchParams = useSearchParams();
  const bgParam = searchParams.get('bg');
  const activeBg = backgrounds.find((bg) => bg.id === bgParam) || backgrounds[0];

  const handleExport = async (format: 'png' | 'jpeg') => {
    if (!previewRef.current) return;

    try {
      setIsExporting(true);

      const options = {
        quality: 0.95,
        cacheBust: true,
        ...(format === 'jpeg' && { backgroundColor: '#ffffff' }),
        pixelRatio: 2,
      };

      const dataUrl =
        format === 'png'
          ? await toPng(previewRef.current, options)
          : await toJpeg(previewRef.current, options);

      const link = document.createElement('a');
      link.download = `workspace-preview.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to export image:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-end">
        <DropdownMenu>
         <DropdownMenuTrigger
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
            disabled={isExporting}
          >
            {isExporting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Download className="mr-2 h-4 w-4" />
            )}
            Export Image
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleExport('png')}>
              Export as PNG (.png)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExport('jpeg')}>
              Export as JPG (.jpg)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div
        ref={previewRef}
        className="relative w-full aspect-video bg-muted rounded-xl border border-border overflow-hidden"
      >
        {activeBg && (
          <img
            src={activeBg.src}
            alt={activeBg.name}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        )}

        <AnimatePresence>
          <PreviewItem key={chair.id} item={chair} containerRef={previewRef} />
          <PreviewItem key={desk.id} item={desk} containerRef={previewRef} />
          {selectedAccessories.map((item) => (
            <PreviewItem key={item.id} item={item} containerRef={previewRef} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}