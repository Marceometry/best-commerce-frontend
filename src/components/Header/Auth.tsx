'use client'

import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getUser } from '@/services'
import { logout } from '@/services/auth'
import { User } from '@/types'

export function Auth() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.replace('/')
    window.location.reload()
  }

  const handleFetchUser = async () => {
    try {
      const user = await getUser()
      setUser(user)
    } catch (error) {}
  }

  useEffect(() => {
    handleFetchUser()
  }, [])

  return (
    <div className="flex items-center justify-end gap-4 text-sm">
      {user ? (
        <>
          <span>{user.name}</span>
          <button
            className="btn-secondary flex items-center gap-1"
            onClick={handleLogout}
          >
            Logout
            <LogOut size={16} />
          </button>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  )
}
