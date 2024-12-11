import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ActionButtonsProps {
  onDownload: () => void
  onMint: () => void
}

export function ActionButtons({ onDownload, onMint }: ActionButtonsProps) {
  return (
    <div className="flex gap-4 justify-center">
      <Button 
        onClick={onDownload}
        variant="outline"
        className="gap-2"
      >
        <Download className="h-4 w-4" />
        Download
      </Button>
      <Button onClick={onMint}>
        Mint on Zora
      </Button>
    </div>
  )
}