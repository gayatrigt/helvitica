import React, { useState, useRef } from 'react';
import { TextInput } from './text-input';
import { FontControls } from './font-controls';
import { FontSizeControls } from './font-size-controls';
import { ColorPicker } from './color-picker';
import { ActionButtons } from './action-buttons';
import { fontVariants } from '@/lib/font-variants';

import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontVariant } from '@/lib/types/font';
import { Color } from '@/lib/types/colors';

export function TextSquare() {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(120);
  const [selectedVariant, setSelectedVariant] = useState<FontVariant>(fontVariants[0]);
  const [bgColor, setBgColor] = useState('bg-white');
  const [textColor, setTextColor] = useState('text-black');
  
  const textRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleVariantChange = (value: string) => {
    const newVariant = fontVariants.find(v => v.value === value);
    if (newVariant) {
      setSelectedVariant(newVariant);
    }
  };

  const handleColorSelect = (color: Color) => {
    setBgColor(color.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      <Card className="p-4 w-full max-w-[1200px] space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorPicker
            selectedColor={bgColor}
            onColorSelect={handleColorSelect}
          />

          <div>
            <Label className="mb-2 block">Text Color</Label>
            <div className="flex gap-2">
              <Button
                variant={textColor === "text-black" ? "default" : "outline"}
                onClick={() => setTextColor("text-black")}
                className="w-16"
              >
                Black
              </Button>
              <Button
                variant={textColor === "text-white" ? "default" : "outline"}
                onClick={() => setTextColor("text-white")}
                className="w-16"
              >
                White
              </Button>
            </div>
          </div>

          <FontSizeControls
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
          />

          <FontControls
            selectedVariant={selectedVariant}
            onVariantChange={handleVariantChange}
          />
        </div>
      </Card>

      <div ref={containerRef} className="w-[1080px] h-[1080px]">
        <TextInput
          text={text}
          fontSize={fontSize}
          selectedVariant={selectedVariant}
          onChange={(e) => setText(e.target.value)}
          textRef={textRef}
          bgColor={bgColor}
          textColor={textColor}
        />
      </div>
      
      <ActionButtons
        onDownload={() => {}}
        onMint={() => {}}
      />
    </div>
  );
}