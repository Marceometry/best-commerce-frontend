'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { logout } from '@/services/auth'

export async function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.refresh()
    router.replace('/')
  }

  return (
    <button
      className="btn-secondary flex items-center gap-1"
      onClick={handleLogout}
    >
      Logout
      <LogOut size={16} />
    </button>
  )
}
