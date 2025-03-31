import { UploadCloud } from "lucide-react"

export function UploadWidgetTitle() {
  const uploadGlobalPercentage = 77
  const isThereAnyPendingUpload = true

  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <UploadCloud strokeWidth={1.5} className="size-4 text-zinc-400" />
      {isThereAnyPendingUpload
        ? (
          <span className="flex items-baseline gap-1">
            Uploading
            <span className="text-zinc-400 text-xs tabular-nums">{uploadGlobalPercentage}%</span>
          </span>
        )
        : (
          <span>Upload files</span>
        )
      }
    </div>
  )
}