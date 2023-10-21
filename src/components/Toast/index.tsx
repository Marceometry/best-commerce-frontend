'use client'

import { Toaster } from 'react-hot-toast'

export function Toast() {
  return (
    <Toaster
      toastOptions={{ style: { backgroundColor: '#1e293b', color: '#f1f5f9' } }}
    />
  )
}
