import { Form } from './Form'
import { LoginLink } from './LoginLink'

export default function SignUp() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <div className="flex flex-col bg-slate-900 rounded-lg p-4 w-4/5 max-w-sm">
        <h1 className="text-xl font-medium mb-2 text-center">Sign up</h1>

        <Form />

        <p className="text-xs text-center mt-3">
          Already have an account? <LoginLink /> instead.
        </p>
      </div>
    </div>
  )
}
