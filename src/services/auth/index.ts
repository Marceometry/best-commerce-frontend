import axios from 'axios'

type SignInResponse = {
  access_token: string
}

type CreateUserDto = {
  name: string
  username: string
  password: string
}

export async function signUp(payload: CreateUserDto) {
  const { data } = await axios.post<SignInResponse>('/api/signup', payload)
  return data
}

export async function login(payload: Omit<CreateUserDto, 'name'>) {
  const { data } = await axios.post<SignInResponse>('/api/login', payload)
  return data
}

export async function logout() {
  const { data } = await axios.post('/api/logout')
  return data
}
