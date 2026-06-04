const VIDEO_ID = 'TU_VIDEO_ID'

export default function Experiencia() {
  return (
    <div className="card" style={{ maxWidth: 600 }}>
      <h2 className="titulo">Experiencia Personal</h2>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/VZDQ2oe5ikg`}
        title="Experiencia personal"
        allowFullScreen
        style={{ borderRadius: 8, border: 'none', display: 'block' }}
      />
    </div>
  )
}