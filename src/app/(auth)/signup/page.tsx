import Link from 'next/link'
import { Form } from './Form'

export default function SignUp() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <div className="flex flex-col bg-zinc-800 rounded-lg p-4 w-4/5 max-w-sm">
        <h1 className="text-xl font-medium mb-2 text-center">Sign up</h1>

        <Form />

        <p className="text-xs text-center mt-3">
          Already have an account?{' '}
          <Link href="/login" className="text-sky-300 hover:underline">
            Log in
          </Link>{' '}
          instead.
        </p>
      </div>
    </div>
  )
}
