import { useState } from 'react'
import Inicio from './pages/Inicio.jsx'
import Sumadora from './pages/Sumadora.jsx'
import Traductor from './pages/Traductor.jsx'
import TablaMultiplicar from './pages/TablaMultiplicar.jsx'
import Experiencia from './pages/Experiencia.jsx'

const paginas = [
  { id: 'inicio',      label: 'Inicio' },
  { id: 'sumadora',    label: 'Sumadora' },
  { id: 'traductor',   label: 'Traductor' },
  { id: 'tabla',       label: 'Tabla' },
  { id: 'experiencia', label: 'Experiencia' },
]

function App() {
  const [paginaActual, setPaginaActual] = useState('inicio')

  const renderPagina = () => {
    switch (paginaActual) {
      case 'inicio':      return <Inicio />
      case 'sumadora':    return <Sumadora />
      case 'traductor':   return <Traductor />
      case 'tabla':       return <TablaMultiplicar />
      case 'experiencia': return <Experiencia />
      default:            return <Inicio />
    }
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: sans-serif; background: #13131f; }

        .app  { display: flex; min-height: 100vh; }

        /* Sidebar */
        .sidebar { width: 200px; background: #1e1e2e; padding: 20px 12px; }
        .sidebar h2 { color: white; font-size: 15px; margin-bottom: 16px; padding-left: 8px; }
        .nav-btn {
          display: block; width: 100%; padding: 10px 12px;
          margin-bottom: 4px; background: transparent; color: #9ca3af;
          border: none; border-radius: 6px; cursor: pointer;
          text-align: left; font-size: 14px;
        }
        .nav-btn:hover  { background: rgba(255,255,255,0.05); color: white; }
        .nav-btn.active { background: #7c3aed; color: white; }

        /* Contenido */
        .contenido { flex: 1; padding: 32px; }

        /* Clases compartidas para las páginas */
        .card   { background: #1e1e2e; border-radius: 10px; padding: 28px; max-width: 420px; }
        .titulo { color: white; font-size: 20px; margin-bottom: 20px; }
        input[type="number"], input[type="text"] {
          padding: 10px 14px; background: #13131f;
          border: 1px solid #333; border-radius: 6px;
          color: white; font-size: 15px; outline: none;
        }
        input:focus { border-color: #7c3aed; }
        .btn {
          display: block; width: 100%; padding: 11px;
          margin-top: 16px; background: #7c3aed; color: white;
          border: none; border-radius: 6px; font-size: 14px; cursor: pointer;
        }
        .resultado { color: #a78bfa; font-size: 32px; font-weight: 700; margin-top: 16px; }
      `}</style>

      <div className="app">
        <nav className="sidebar">
          <h2>Menú</h2>
          {paginas.map(item => (
            <button
              key={item.id}
              onClick={() => setPaginaActual(item.id)}
              className={`nav-btn ${paginaActual === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <main className="contenido">
          {renderPagina()}
        </main>
      </div>
    </>
  )
}

export default App