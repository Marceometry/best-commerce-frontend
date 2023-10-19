'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Input } from '@/components'
import { login } from '@/services/auth'

type FormValues = {
  username: string
  password: string
}

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { handleSubmit, register } = useForm<FormValues>()
  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      await login(data)
      router.replace('/')
    } catch (error) {
      toast.error('Something went wrong while logging in')
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Username"
        placeholder="Username"
        required
        {...register('username')}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        required
        {...register('password')}
      />

      <div className="mt-6 gap-3 flex justify-center">
        <button
          type="submit"
          className="btn-secondary w-4/5"
          disabled={isSubmitting}
        >
          Login
        </button>
      </div>
    </form>
  )
}
