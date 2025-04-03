/**
 * Converts a file size in bytes to a human-readable string (e.g., "3 KB", "20 MB", "1 GB")
 * @param bytes - The file size in bytes
 * @param decimals - Number of decimal places to include in the output (default: 2)
 * @returns A formatted string representing the file size
 */
export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  // Calculate the appropriate unit by finding how many times we can divide by 1024
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Convert to the appropriate unit and round to specified decimal places
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
}