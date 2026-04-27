import { useState } from 'react'

const categories = [
  { id: '01', label: 'APARTMENTS',  desc: 'Curated flats across metro and tier-2 cities, matched to your exact budget.' },
  { id: '02', label: 'VILLAS',      desc: 'Premium standalone villas with private gardens and luxury finishes.' },
  { id: '03', label: 'PLOTS',       desc: 'Residential and agricultural plots in prime growth corridors.' },
  { id: '04', label: 'PENTHOUSES',  desc: 'Exclusive penthouses with panoramic skyline and city views.' },
  { id: '05', label: 'COMMERCIAL',  desc: 'Office spaces and retail units ready for your business to scale.' },
]

export default function Categories() {
  const [active, setActive] = useState(0)

  return (
    <section className="categories-section">
      <p className="section-label">Explore by Type</p>
      <div className="categories-top">
        <h2 className="categories-heading">COMFORT<br />&amp; SPACE</h2>
        <div className="category-tabs">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`cat-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="cat-num">{cat.id}</span>
              <span className="cat-label">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="category-detail">
        <div className="cat-image" />
        <p className="cat-desc">
          <span className="cat-num-big">{categories[active].id}</span>
          {categories[active].desc}
        </p>
      </div>
    </section>
  )
}
