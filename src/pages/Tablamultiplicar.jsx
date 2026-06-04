import { useState } from 'react'
import { generarTabla } from '../services/tablaMultiplicar.js'

export default function TablaMultiplicar() {
  const [numero, setNumero] = useState('')
  const [tabla,  setTabla]  = useState([])

  const generar = () => {
    const n = parseInt(numero)
    if (!isNaN(n)) setTabla(generarTabla(n))
  }

  return (
    <div className="card">
      <h2 className="titulo">Tabla de Multiplicar</h2>

      <div style={{ display: 'flex', gap: 12 }}>
        <input
          type="number"
          placeholder="Ingresa un número"
          value={numero}
          onChange={e => setNumero(e.target.value)}
        />
        <button
          className="btn"
          onClick={generar}
          style={{ width: 'auto', marginTop: 0 }}
        >
          Generar
        </button>
      </div>

      {tabla.length > 0 && (
        <div style={{ marginTop: 20 }}>
          {tabla.map(({ factor, resultado }) => (
            <div
              key={factor}
              style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #2a2a40' }}
            >
              <span style={{ color: '#9ca3af' }}>{numero} × {factor}</span>
              <span style={{ color: '#a78bfa', fontWeight: 600 }}>{resultado}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}