'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { backgrounds } from '@/lib/data';


export function BackgroundSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedBg = searchParams.get('bg') || backgrounds[0].id;

  const handleSelect = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('bg', id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-muted-foreground">
        Select Background
      </span>
      <div className="grid grid-cols-3 gap-3">
        {backgrounds.map((bg) => {
          const isSelected = selectedBg === bg.id;

          return (
                <Button
                    key={bg.id}
                    type="button"
                    variant="outline"
                    onClick={() => handleSelect(bg.id)}
                    className={cn(
                        'relative h-32 w-full aspect-video p-0 overflow-hidden border-2 transition-all',
                        isSelected
                        ? 'border-primary ring-2 ring-primary/20 opacity-100'
                        : 'border-border opacity-70 hover:opacity-100'
                    )}
            >
            <img
                src={bg.src}
                alt={bg.name}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            <span className="absolute bottom-2 left-4 text.xs font-medium text-white truncate pointer-events-none">
                {bg.name}
            </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}