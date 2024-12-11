import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FontVariant } from '@/lib/types/font';

interface TextInputProps {
  text: string;
  fontSize: number;
  selectedVariant: FontVariant;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textRef: React.RefObject<HTMLTextAreaElement>;
  bgColor: string;
  textColor: string;
}

export function TextInput({
  text,
  fontSize,
  selectedVariant,
  onChange,
  textRef,
  bgColor,
  textColor,
}: TextInputProps) {
  return (
    <Card className={cn(
      "w-full h-full relative",
      bgColor
    )}>
      <CardContent className="p-0 w-full h-full">
        {/* Hidden textarea for handling input */}
        <textarea
          ref={textRef}
          value={text}
          onChange={onChange}
          className="opacity-0 absolute w-full h-full resize-none border-none p-8"
        />
        
        {/* Visible text display */}
        <div 
          className={cn(
            "w-full h-full flex items-center justify-center",
            "transition-colors duration-200",
            "p-8",
            textColor
          )}
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: selectedVariant.css,
          }}
        >
          {text || "Type your text here..."}
        </div>
      </CardContent>
    </Card>
  );
}