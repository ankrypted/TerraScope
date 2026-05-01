import { useState } from 'react'

export default function Hero({ onSearch }) {
  const [city, setCity] = useState('')
  const [budget, setBudget] = useState('')

  const handleSearch = () => {
    onSearch({ city, budget })
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">Pan India Property Rate Intelligence</p>
        <h1 className="hero-heading">
          KNOW YOUR<br />MARKET<span className="accent-dot">.</span>
        </h1>
        <p className="hero-sub">
          Explore government circle rates and real market prices for residential properties — locality by locality, across 10 major Indian cities.
        </p>
        <div className="search-bar">
          <select className="search-select" value={city} onChange={e => setCity(e.target.value)}>
            <option value="">Select City</option>
            <option value="all">Pan India</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Delhi</option>
            <option>Gurgaon</option>
            <option>Noida</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Pune</option>
            <option>Kolkata</option>
            <option>Ahmedabad</option>
          </select>
          <select className="search-select" value={budget} onChange={e => setBudget(e.target.value)}>
            <option value="">Your Budget</option>
            <option>Under ₹50L</option>
            <option>₹50L – ₹1Cr</option>
            <option>₹1Cr – ₹3Cr</option>
            <option>₹3Cr – ₹10Cr</option>
            <option>Above ₹10Cr</option>
          </select>
          <button className="search-btn" onClick={handleSearch}>EXPLORE RATES →</button>
        </div>
      </div>
      <button
        className="hero-arrow"
        aria-label="Scroll to content"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >↗</button>
    </section>
  )
}
