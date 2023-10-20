'use client'

import { LogOut } from 'lucide-react'
import { logout } from '@/services/auth'

export async function LogoutButton() {
  const handleLogout = async () => {
    await logout()
    window.location.replace('/')
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
