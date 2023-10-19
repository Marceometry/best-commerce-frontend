import Link from 'next/link'
import { Form } from './Form'

export default function Login() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <div className="flex flex-col bg-zinc-800 rounded-lg p-4 w-4/5 max-w-sm">
        <h1 className="text-xl font-medium mb-2 text-center">Login</h1>

        <Form />

        <p className="text-xs text-center mt-3">
          {"Don't"} have an account yet?{' '}
          <Link href="/signup" className="text-sky-300 hover:underline">
            Sign up
          </Link>{' '}
          instead.
        </p>
      </div>
    </div>
  )
}
