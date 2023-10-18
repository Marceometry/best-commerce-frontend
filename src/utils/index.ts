export function formatCurrency(value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100)
}

export function currencyMask(value: string) {
  const number = Number(value.replace(/\D+/g, ''))
  if (!number) return ''
  return formatCurrency(number)
}

export function currencyUnmask(value: string) {
  return Number(value.replace(/\D+/g, ''))
}
