import * as Progress from '@radix-ui/react-progress'
import { motion } from 'motion/react'

import { Download, ImageUp, Link2, RefreshCcw, X } from "lucide-react";
import { Button } from "./ui/button";
import { Upload } from '../store/upload';
import { formatFileSize } from '../utils/parse-bytes';

interface UploadWidgetUploadItemProps {
  upload: Upload
}

export function UploadWidgetUploadItem({ upload }: UploadWidgetUploadItemProps) {
  return (
    <motion.div
      className="p-3 flex flex-col gap-3 rounded-lg shadow-shape-content bg-white/2 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium flex items-center gap-1">
          <ImageUp strokeWidth={1.5} className="size-3 text-zinc-300" />

          <span>{ upload.name }</span>
        </span>

        <span className="text-xxs text-zinc-400 flex gap-1.5 items-center">
          <span className="line-through">{formatFileSize(upload.file.size)}</span>
          <div className="size-1 rounded-full bg-zinc-700"></div>
          <span>
            300KB
            <span className="text-green-400 ml-1">
              -94%
            </span>
          </span>
          <div className="size-1 rounded-full bg-zinc-700"></div>
          <span>45%</span>
        </span>
      </div>

      <Progress.Root className="bg-zinc-800 rounded-full h-1 overflow-hidden">
        <Progress.Indicator className="bg-indigo-500 h-1" style={{ width: '47%' }} />
      </Progress.Root>

      <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
        <Button size='icon-sm'>
          <Download strokeWidth={1.5} className="size-4" />
          <span className="sr-only">Download compressed image</span>
        </Button>
        <Button size='icon-sm'>
          <Link2 strokeWidth={1.5} className="size-4" />
          <span className="sr-only">Copy remote URL</span>
        </Button>
        <Button size='icon-sm'>
          <RefreshCcw strokeWidth={1.5} className="size-4" />
          <span className="sr-only">Retry upload</span>
        </Button>
        <Button size='icon-sm'>
          <X strokeWidth={1.5} className="size-4" />
          <span className="sr-only">Cancel upload</span>
        </Button>
      </div>
    </motion.div>
  )
}