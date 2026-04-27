const stats = [
  { num: '12,000+', label: 'Active Listings' },
  { num: '200+',    label: 'Cities Covered' },
  { num: '₹10L – ₹50Cr', label: 'Budget Range' },
  { num: '98%',     label: 'Verified Listings' },
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
