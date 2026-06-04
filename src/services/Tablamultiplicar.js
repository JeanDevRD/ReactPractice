export function generarTabla(numero) {
  return Array.from({ length: 13 }, (_, i) => {
    const factor = i + 1
    return { factor, resultado: numero * factor }
  })
}