import { useState } from 'react'
import { numeroALetras } from '../services/traductor.js'

export default function Traductor() {
  const [numero,    setNumero]    = useState('')
  const [resultado, setResultado] = useState(null)
  const [error,     setError]     = useState('')

  const traducir = () => {
    const n = parseInt(numero)
    if (isNaN(n) || n < 1 || n > 1000) {
      setError('Ingresa un número entre 1 y 1000')
      setResultado(null)
      return
    }
    setError('')
    const texto = numeroALetras(n)
    setResultado(texto.charAt(0).toUpperCase() + texto.slice(1))
  }

  return (
    <div className="card">
      <h2 className="titulo">Traductor de Números</h2>

      <input
        type="number"
        placeholder="Número del 1 al 1000"
        value={numero}
        onChange={e => setNumero(e.target.value)}
        style={{ width: '100%' }}
      />

      {error && <p style={{ color: '#f87171', marginTop: 8, fontSize: 13 }}>{error}</p>}

      <button className="btn" onClick={traducir}>Traducir</button>

      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  )
}