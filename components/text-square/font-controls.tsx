import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { fontVariants } from '@/lib/font-variants'
  import { Label } from "@/components/ui/label"
import { FontVariant } from "@/lib/types/font"
  
  interface FontControlsProps {
    selectedVariant: FontVariant
    onVariantChange: (value: string) => void
  }
  
  export function FontControls({
    selectedVariant,
    onVariantChange
  }: FontControlsProps) {
    return (
      <div className="flex items-center gap-4">
        <Label htmlFor="font-select">Font:</Label>
        <Select value={selectedVariant.value} onValueChange={onVariantChange}>
          <SelectTrigger id="font-select" className="w-[300px]">
            <SelectValue defaultValue={selectedVariant.value} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={selectedVariant.value}>
                {selectedVariant.label}
              </SelectItem>
              {fontVariants.map(variant => (
                variant.value !== selectedVariant.value && (
                  <SelectItem 
                    key={variant.value} 
                    value={variant.value}
                    style={{ fontFamily: variant.css }}
                  >
                    {variant.label}
                  </SelectItem>
                )
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    )
  }