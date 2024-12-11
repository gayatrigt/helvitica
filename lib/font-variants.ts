import { FontVariant } from "./types/font";

// lib/font-variants.ts
export const fontVariants: FontVariant[] = [
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
    { value: 'light', label: 'Neue Light', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-light)' },
    { value: 'lightItalic', label: 'Neue Light Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-light-italic)' },
    { value: 'roman', label: 'Neue Roman', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-roman)' },
    { value: 'italic', label: 'Neue Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-italic)' },
    { value: 'medium', label: 'Neue Medium', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-medium)' },
    { value: 'mediumItalic', label: 'Neue Medium Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-medium-italic)' },
    { value: 'bold', label: 'Neue Bold', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-bold)' },
    { value: 'boldItalic', label: 'Neue Bold Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-bold-italic)' },
    { value: 'heavy', label: 'Neue Heavy', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-heavy)' },
    { value: 'heavyItalic', label: 'Neue Heavy Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-heavy-italic)' },
    { value: 'black', label: 'Neue Black', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-black)' },
    { value: 'blackItalic', label: 'Neue Black Italic', family: 'helveticaNeue', css: 'var(--font-helvetica-neue-black-italic)' }
  ]