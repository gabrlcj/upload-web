import { useDropzone } from 'react-dropzone'
import { CircularProgressBar } from './ui/circular-progress-bar'
import { motion } from 'motion/react'
import { useUploads } from '../store/upload'

export function UploadWidgetDropzone() {
  const { addUploads } = useUploads()

  const uploadGlobalPercentage = 77
  const isThereAnyPendingUpload = false

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    onDrop(acceptedFiles) {
      addUploads(acceptedFiles)
    },
  })

  return (
    <motion.div
      className="px-3 flex flex-col gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div
        data-active={isDragActive}
        className='cursor-pointer text-zinc-400 bg-black/20 p-5 rounded-lg border border-zinc-700 border-dashed h-32 flex flex-col items-center justify-center gap-1 hover:border-zinc-600 transition-colors data-[active=true]:bg-indigo-500/10 data-[active=true]:border-indigo-500 data-[active=true]:text-indigo-400'
        {...getRootProps()}
      >
        <input type="file" {...getInputProps()} />

        {isThereAnyPendingUpload
          ? (
            <div className='flex flex-col items-center gap-2.5'>
              <CircularProgressBar strokeWidth={4} progress={uploadGlobalPercentage} size={56} />
              <span className='text-xs'>Uploading 3 files...</span>
            </div>
          )
          : (
            <>
              <span className='text-xs'>Drop your files here or</span>
              <span className='text-xs underline'>click to open picker</span>
            </>
          )
        }
      </div>

      <span className='text-xxs text-zinc-400'>Only PNG and JPG files are supported!</span>
    </motion.div>
  )
}