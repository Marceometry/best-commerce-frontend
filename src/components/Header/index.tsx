type Props = {
  title: string
}

export function Header({ title }: Props) {
  return (
    <header className="flex items-center justify-center p-4 border-b">
      <h1 className="text-2xl">{title}</h1>
    </header>
  )
}
