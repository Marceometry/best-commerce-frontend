import axios from 'axios'
import { api } from '@/lib/axios'

type SignInResponse = {
  access_token: string
}

type CreateUserDto = {
  name: string
  username: string
  password: string
}

export async function signUp(payload: CreateUserDto) {
  const { data } = await axios.post<SignInResponse>('/api/auth/signup', payload)
  return data
}

export async function login(payload: Omit<CreateUserDto, 'name'>) {
  const { data } = await axios.post<SignInResponse>('/api/auth/login', payload)
  return data
}
