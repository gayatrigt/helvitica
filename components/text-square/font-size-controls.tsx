// components/text-square/font-size-controls.tsx
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface FontSizeControlsProps {
  fontSize: number
  onFontSizeChange: (size: number) => void
  minSize?: number
  maxSize?: number
}

export function FontSizeControls({
  fontSize,
  onFontSizeChange,
  minSize = 8,
  maxSize = 200
}: FontSizeControlsProps) {
  return (
    <div className="flex items-center gap-4 w-[300px]">
      <Label htmlFor="font-size" className="min-w-20">Font Size:</Label>
      <Slider
        id="font-size"
        min={minSize}
        max={maxSize}
        step={1}
        value={[fontSize]}
        onValueChange={(values) => onFontSizeChange(values[0])}
        className="flex-1"
      />
      <Input
        type="number"
        value={fontSize}
        onChange={(e) => {
          const value = parseInt(e.target.value)
          if (value >= minSize && value <= maxSize) {
            onFontSizeChange(value)
          }
        }}
        className="w-20"
        min={minSize}
        max={maxSize}
      />
    </div>
  )
}