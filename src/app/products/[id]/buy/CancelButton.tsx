'use client'

import { useRouter } from 'next/navigation'

export async function CancelButton() {
  const router = useRouter()

  const handleCancel = () => router.back()

  return (
    <button onClick={handleCancel} className="btn-secondary w-full">
      Cancel
    </button>
  )
}
