import { forwardRef } from 'react'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
}

export const Input = forwardRef(
  ({ label, ...props }: Props, ref: React.ForwardedRef<HTMLInputElement>) => (
    <fieldset className="mb-3 flex flex-col justify-center gap-1">
      <label htmlFor={props.name} className="text-sm mb-1">
        {label}
        {props.required ? '*' : ''}
      </label>
      <input
        id={props.name}
        ref={ref}
        className="bg-slate-800 shadow-slate-400 focus-visible:shadow-slate-100 text-sm inline-flex w-full flex-1 items-center justify-center rounded-md px-3 py-2 leading-none shadow-[0_0_0_1px] outline-none focus-visible:shadow-[0_0_0_2px] transition-shadow"
        {...props}
      />
    </fieldset>
  ),
)

Input.displayName = 'Input'
