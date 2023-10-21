'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  title: string
  trigger: React.ReactNode
  children: React.ReactNode
}

export function Modal({ open, setOpen, trigger, title, children }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-950/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0" />
        <Dialog.Content className="bg-slate-900 data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus-visible:outline-none">
          <div className="flex justify-between mb-2">
            <Dialog.Title className="text-lg">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="px-1 inline-flex appearance-none items-center justify-center rounded-lg focus-visible:shadow-[0_0_0_2px] focus-visible:outline-none transition-shadow"
                aria-label="Close"
              >
                <X />
              </button>
            </Dialog.Close>
          </div>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
