"use client"

import * as React from "react"
import { Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react"
import { checkMintStatus, createZoraCollection, mintToZora } from "@/lib/zoramint"
import { TextArtMetadata } from "@/lib/types/nft"
import { Alert, AlertDescription } from "./ui/alert"

// Font variants configuration
const fontVariants = [
  // Helvetica
  { value: 'regular', label: 'Helvetica Regular', family: 'helvetica', css: 'var(--font-helvetica-regular)' },
  { value: 'bold', label: 'Helvetica Bold', family: 'helvetica', css: 'var(--font-helvetica-bold)' },
  { value: 'oblique', label: 'Helvetica Oblique', family: 'helvetica', css: 'var(--font-helvetica-oblique)' },
  { value: 'boldOblique', label: 'Helvetica Bold Oblique', family: 'helvetica', css: 'var(--font-helvetica-bold-oblique)' },
  { value: 'light', label: 'Helvetica Light', family: 'helvetica', css: 'var(--font-helvetica-light)' },
  { value: 'compressed', label: 'Helvetica Compressed', family: 'helvetica', css: 'var(--font-helvetica-compressed)' },
  { value: 'roundedBold', label: 'Helvetica Rounded Bold', family: 'helvetica', css: 'var(--font-helvetica-rounded-bold)' },
  // Helvetica Neue
  { value: 'ultraLight', label: 'Neue Ultra Light', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-ultra-light)' },
  { value: 'ultraLightItalic', label: 'Neue Ultra Light Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-ultra-light-italic)' },
  { value: 'thin', label: 'Neue Thin', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-thin)' },
  { value: 'thinItalic', label: 'Neue Thin Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-thin-italic)' },
  { value: 'neueLight', label: 'Neue Light', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-light)' },
  { value: 'lightItalic', label: 'Neue Light Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-light-italic)' },
  { value: 'roman', label: 'Neue Roman', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-roman)' },
  { value: 'italic', label: 'Neue Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-italic)' },
  { value: 'medium', label: 'Neue Medium', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-medium)' },
  { value: 'mediumItalic', label: 'Neue Medium Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-medium-italic)' },
  { value: 'neueBold', label: 'Neue Bold', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-bold)' },
  { value: 'boldItalic', label: 'Neue Bold Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-bold-italic)' },
  { value: 'heavy', label: 'Neue Heavy', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-heavy)' },
  { value: 'heavyItalic', label: 'Neue Heavy Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-heavy-italic)' },
  { value: 'black', label: 'Neue Black', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-black)' },
  { value: 'blackItalic', label: 'Neue Black Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-black-italic)' }
]

const backgroundColors = [
  { name: "White", value: "bg-white" },
  { name: "Black", value: "bg-black" },
  { name: "Slate", value: "bg-slate-100" },
  { name: "Rose", value: "bg-rose-50" },
  { name: "Green", value: "bg-green-50" },
  { name: "Blue", value: "bg-blue-50" },
  { name: "Purple", value: "bg-purple-50" },
]

interface MintStatus {
    type: 'info' | 'error' | 'success';
    message: string;
  }

export default function TextEditor() {
  const [fontSize, setFontSize] = React.useState(20)
  const [selectedFont, setSelectedFont] = React.useState(fontVariants[0])
  const [bgColor, setBgColor] = React.useState("bg-white")
  const [text, setText] = React.useState("")
  const [textColor, setTextColor] = React.useState("text-black")
  const [minting, setMinting] = useState<boolean>(false);
  const [mintStatus, setMintStatus] = useState<MintStatus | null>(null);

  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0])
  }

  const handleFontSizeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value >= 10 && value <= 200) {
      setFontSize(value)
    }
  }

  const handleFontChange = (value: string) => {
    const font = fontVariants.find(f => f.value === value)
    if (font) {
      setSelectedFont(font)
    }
  }

  const handleMint = async (): Promise<void> => {
    setMinting(true);
    setMintStatus({ type: 'info', message: 'Creating NFT collection...' });

    try {
      const apiKey = "sk_production_AA9iuY1nC9vXggksFVhF4BLnPyehz1Jho8At92CvZsmKPmWz5xZKcjHoVKHBW1TMgm86xWKpk6Kw2EUYv85dmAnrkKZSHFc8o5hoBn2W1fT1VJRBc3i6TPMNL98QKMHmvWT86KTMdrR2i1JhzHucvxdp7zhWCnFv5Ljw9qTGPZNuN5KoqFsVC1y7cxp6RD2QxpHaYxBspsnbZ7iQd4asghJr"

      if (!apiKey) {
        throw new Error('Crossmint API key is not configured');
      }

      // Create collection
      const collectionId = await createZoraCollection(apiKey);
      
      setMintStatus({ type: 'info', message: 'Minting NFT...' });

      // Prepare metadata
      const metadata: TextArtMetadata = {
        text,
        fontSize,
        fontFamily: selectedFont.label,
        backgroundColor: bgColor,
        textColor
      };

      // Mint NFT
      const mintResult = await mintToZora(apiKey, collectionId, metadata);

      // Check mint status
      if (mintResult.actionId) {
        const status = await checkMintStatus(apiKey, mintResult.actionId);
        setMintStatus({ 
          type: status === 'completed' ? 'success' : 'info',
          message: status === 'completed' ? 'NFT minted successfully!' : `Minting status: ${status}`
        });
      }
    } catch (error) {
      console.error('Minting error:', error);
      setMintStatus({ 
        type: 'error', 
        message: error instanceof Error 
          ? `Error: ${error.message}` 
          : 'Failed to mint NFT. Please try again.' 
      });
    } finally {
      setMinting(false);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-background">
      <Card className="max-w-md mx-auto">
        <CardContent className="p-4">
          <div className="grid gap-4">
          <div
  className={`w-full aspect-square rounded-lg border ${bgColor} transition-colors 
  overflow-hidden flex items-center justify-center`}
>
  <textarea
    className={`w-full h-full bg-transparent resize-none
      focus:outline-none ${textColor} text-center p-2`}
    style={{
      fontSize: `${fontSize}px`,
      fontFamily: selectedFont.css,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    placeholder="Type your text here..."
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
</div>

{mintStatus && (
              <Alert variant={mintStatus.type === 'error' ? 'destructive' : 'default'}>
                <AlertDescription>{mintStatus.message}</AlertDescription>
              </Alert>
            )}

            <div>
              <Label htmlFor="font" className="mb-2 block text-sm">
                Font Style
              </Label>
              <Select value={selectedFont.value} onValueChange={handleFontChange}>
                <SelectTrigger id="font" className="w-full">
                  <SelectValue placeholder="Select font style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Helvetica</SelectLabel>
                    {fontVariants.filter(f => f.family === 'helvetica').map((font) => (
                      <SelectItem key={font.value} value={font.value}>
                        {font.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Helvetica Neue</SelectLabel>
                    {fontVariants.filter(f => f.family === 'helveticaNeue').map((font) => (
                      <SelectItem key={font.value} value={font.value}>
                        {font.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="font-size" className="mb-2 block text-sm">
                Font Size
              </Label>
              <div className="flex items-center gap-2">
                <Slider
                  id="font-size"
                  min={10}
                  max={200}
                  step={1}
                  value={[fontSize]}
                  onValueChange={handleFontSizeChange}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={fontSize}
                  onChange={handleFontSizeInput}
                  min={10}
                  max={200}
                  className="w-16"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2 block text-sm">Background Color</Label>
                <div className="flex flex-wrap gap-2">
                  {backgroundColors.map((color) => (
                    <TooltipProvider key={color.value}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => setBgColor(color.value)}
                            className={`w-6 h-6 rounded-full border ${color.value} ${
                              bgColor === color.value ? "ring-2 ring-primary ring-offset-2" : ""
                            }`}
                            aria-label={`Select ${color.name} background`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{color.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>

              <div>
                <Label className="mb-2 block text-sm">Text Color</Label>
                <div className="flex flex-wrap gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => setTextColor("text-black")}
                          className={`w-6 h-6 rounded-full border bg-black ${
                            textColor === "text-black" ? "ring-2 ring-primary ring-offset-2" : ""
                          }`}
                          aria-label="Select black text color"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Black</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => setTextColor("text-white")}
                          className={`w-6 h-6 rounded-full border bg-white ${
                            textColor === "text-white" ? "ring-2 ring-primary ring-offset-2" : ""
                          }`}
                          aria-label="Select white text color"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>White</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <Button 
                variant="outline" 
                onClick={() => setText("")} 
                className="text-xs"
                size="sm"
              >
                Clear
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="secondary" 
                  className="text-xs" 
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
                <Button 
                  className="text-xs" 
                  size="sm"
                  onClick={handleMint}
                  disabled={minting || !text.trim()}
                >
                  {minting ? 'Minting...' : 'Mint on Zora'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}