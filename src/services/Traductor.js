const unidades  = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve']
const veintes    = ['veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve']
const decenas    = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
const centenas   = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']

export function numeroALetras(n) {
  if (n === 1000) return 'mil'
  if (n === 100)  return 'cien'

  if (n > 100) {
    const c     = Math.floor(n / 100)
    const resto = n % 100
    return resto === 0
      ? centenas[c]
      : `${centenas[c]} ${numeroALetras(resto)}`
  }

  if (n >= 30) {
    const d = Math.floor(n / 10)
    const u = n % 10
    return u === 0 ? decenas[d] : `${decenas[d]} y ${unidades[u]}`
  }

  if (n >= 20) return veintes[n - 20]
  if (n >= 10) return especiales[n - 10]
  return unidades[n]
}