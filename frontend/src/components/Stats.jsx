const stats = [
  { num: '10',          label: 'Cities Covered' },
  { num: '95+',         label: 'Localities Tracked' },
  { num: '₹10L – ₹50Cr', label: 'Budget Range' },
  { num: '2',           label: 'Rate Types' },
]

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((s, i) => (
        <>
          <div key={s.label} className="stat">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
          {i < stats.length - 1 && <div key={`div-${i}`} className="stat-divider" />}
        </>
      ))}
    </section>
  )
}
