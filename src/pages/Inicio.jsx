export default function Inicio() {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
 
      <img
        src="/photo.jpeg"
        alt="Foto de perfil"
        style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', border: '3px solid #7c3aed' }}
      />
 
      <h2 style={{ color: 'white', margin: '16px 0 4px' }}>Jean Carlos Mendoza</h2>
      <p style={{ color: '#9ca3af', marginBottom: 8 }}>Desarrollo de Software</p>
      <p style={{ color: '#a78bfa' }}>jeankim1628@gmail.com</p>
 
    </div>
  )
}