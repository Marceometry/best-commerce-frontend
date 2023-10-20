'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Input } from '@/components'
import { signUp } from '@/services/auth'

type FormValues = {
  name: string
  username: string
  password: string
  repeatedPassword: string
}

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { handleSubmit, register } = useForm<FormValues>()
  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.password !== data.repeatedPassword) throw new Error('')
      setIsSubmitting(true)
      await signUp(data)
      window.location.replace('/')
    } catch (error) {
      toast.error('Something went wrong while logging in')
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <Input label="Name" placeholder="Name" required {...register('name')} />
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
      <Input
        label="Repeat Password"
        placeholder="Password"
        type="password"
        required
        {...register('repeatedPassword')}
      />

      <div className="mt-6 gap-3 flex justify-center">
        <button className="btn-secondary w-full" onClick={router.back}>
          Cancel
        </button>
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          Sign up
        </button>
      </div>
    </form>
  )
}
