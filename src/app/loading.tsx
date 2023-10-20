import { Loader } from 'lucide-react'

export default function Loading() {
  return (
    <div className="grid place-items-center h-screen">
      <Loader className="animate-spin" />
    </div>
  )
}
