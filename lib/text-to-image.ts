// app/utils/text-to-image.ts
import { createCanvas } from 'canvas';

export interface TextRenderOptions {
  text: string;
  fontSize: number;
  fontFamily: string;
  backgroundColor: string;
  textColor: string;
  width?: number;
  height?: number;
}

export async function renderTextToImage(options: TextRenderOptions): Promise<Buffer> {
  const width = options.width || 800;
  const height = options.height || 800;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Convert Tailwind classes to actual colors
  const bgColor = options.backgroundColor.replace('bg-', '');
  const txtColor = options.textColor.replace('text-', '');

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Configure text
  ctx.font = `${options.fontSize}px ${options.fontFamily}`;
  ctx.fillStyle = txtColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Draw text
  ctx.fillText(options.text, width / 2, height / 2);

  // Return as buffer
  return canvas.toBuffer('image/png');
}