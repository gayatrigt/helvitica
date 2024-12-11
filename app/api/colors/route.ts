import { Color } from "@/lib/types/colors";

export const getColors = async (): Promise<Color[]> => {
    // Simulating API call
    return [
      { id: '1', name: 'Midnight Black', value: 'bg-black', hex: '#000000', category: 'dark' },
      { id: '2', name: 'Pure White', value: 'bg-white', hex: '#FFFFFF', category: 'light' },
      { id: '3', name: 'Forest Green', value: 'bg-[#2D5A27]', hex: '#2D5A27', category: 'nature' },
      { id: '4', name: 'Ocean Blue', value: 'bg-[#1B4B7A]', hex: '#1B4B7A', category: 'nature' },
      { id: '5', name: 'Sunset Orange', value: 'bg-[#F26419]', hex: '#F26419', category: 'warm' },
      { id: '6', name: 'Royal Purple', value: 'bg-[#6B2D5C]', hex: '#6B2D5C', category: 'rich' },
      { id: '7', name: 'Desert Sand', value: 'bg-[#E6B89C]', hex: '#E6B89C', category: 'neutral' },
      { id: '8', name: 'Storm Gray', value: 'bg-[#4A4E69]', hex: '#4A4E69', category: 'neutral' },
      { id: '9', name: 'Cherry Red', value: 'bg-[#D90429]', hex: '#D90429', category: 'vibrant' },
      { id: '10', name: 'Mint Green', value: 'bg-[#9DC88D]', hex: '#9DC88D', category: 'soft' }
    ];
  };