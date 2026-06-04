import { useState } from 'react'

export default function Sumadora() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(null)

  const sumar = () => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    if (!isNaN(a) && !isNaN(b)) setResultado(a + b)
  }

  

  return (
    <div className="card">
      <h2 className="titulo">Sumadora</h2>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={e => setNum1(e.target.value)}
        />
        <span style={{ color: '#9ca3af', fontSize: 22 }}>+</span>
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={e => setNum2(e.target.value)}
        />
      </div>

      <button className="btn" onClick={sumar}>Calcular</button>

      {resultado !== null && (
        <p className="resultado">= {resultado}</p>
      )}
    </div>
  )
}