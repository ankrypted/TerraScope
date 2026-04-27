import { useState } from 'react'

const advantages = [
  'AI-POWERED BUDGET MATCHING',
  'PAN-INDIA PROPERTY COVERAGE',
  'VERIFIED LISTINGS ONLY',
  'ZERO BROKERAGE OPTIONS',
  'INSTANT LEGAL DOCUMENT CHECK',
]

export default function WhySection() {
  const [active, setActive] = useState(0)

  return (
    <section className="why-section">
      <div className="why-left">
        <p className="section-label">Why does it have to be TerraScope?</p>
        <h2 className="why-heading">Our Advantages</h2>
        <ul className="advantages-list">
          {advantages.map((adv, i) => (
            <li
              key={i}
              className={`advantage-item ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span>{adv}</span>
              {active === i && <span className="adv-arrow">→</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="why-right">
        <div className="why-image">
          <div className="why-image-overlay">
            <h3>TAKE A BIG STEP<br />INTO YOUR<br />FUTURE HOME</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
