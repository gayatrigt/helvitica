'use client';

import { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Color } from '@/lib/types/colors';
import { getColors } from '@/app/api/colors/route';

interface ColorPickerProps {
  selectedColor: string;
  onColorSelect: (color: Color) => void;
  label?: string;
}

export function ColorPicker({
  selectedColor,
  onColorSelect,
  label = "Background Color"
}: ColorPickerProps) {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        setLoading(true);
        const data = await getColors();
        setColors(data);
      } catch (err) {
        setError('Failed to load colors');
        console.error('Error fetching colors:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchColors();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-2">
      <Label className="block">{label}</Label>
      
      {loading ? (
        <div className="flex flex-wrap gap-2">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="w-8 h-8 rounded-full" />
          ))}
        </div>
      ) : (
        <ScrollArea className="h-[120px] w-full rounded-md border p-4">
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <TooltipProvider key={color.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => onColorSelect(color)}
                      className={`w-10 h-10 rounded-full transition-all hover:scale-110 ${color.value} ${
                        selectedColor === color.value
                          ? "ring-2 ring-primary ring-offset-2"
                          : "hover:ring-1 hover:ring-primary hover:ring-offset-1"
                      }`}
                      style={{ 
                        backgroundColor: color.hex,
                        border: color.value === 'bg-white' ? '1px solid #e2e8f0' : 'none'
                      }}
                      aria-label={`Select ${color.name}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{color.name}</p>
                    {color.category && (
                      <p className="text-xs text-muted-foreground capitalize">
                        {color.category}
                      </p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}