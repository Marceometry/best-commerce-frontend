'use client'

import { Toaster } from 'react-hot-toast'

export function Toast() {
  return (
    <Toaster
      toastOptions={{ style: { backgroundColor: '#222', color: 'white' } }}
    />
  )
}
