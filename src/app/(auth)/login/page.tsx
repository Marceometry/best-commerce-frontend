import { Form } from './Form'
import { SignUpLink } from './SignUpLink'

export default function Login() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <div className="flex flex-col bg-zinc-800 rounded-lg p-4 w-4/5 max-w-sm">
        <h1 className="text-xl font-medium mb-2 text-center">Login</h1>

        <Form />

        <p className="text-xs text-center mt-3">
          {"Don't"} have an account yet? <SignUpLink /> instead.
        </p>
      </div>
    </div>
  )
}
