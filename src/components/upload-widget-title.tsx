import { UploadCloud } from "lucide-react"
import { usePendingUploads } from "../store/upload"

export function UploadWidgetTitle() {
  const { globalPercent, isThereAnyPendingUpload } = usePendingUploads()

  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <UploadCloud strokeWidth={1.5} className="size-4 text-zinc-400" />
      {isThereAnyPendingUpload
        ? (
          <span className="flex items-baseline gap-1">
            Uploading
            <span className="text-zinc-400 text-xs tabular-nums">{globalPercent}%</span>
          </span>
        )
        : (
          <span>Upload de arquivos</span>
        )
      }
    </div>
  )
}