import { useState, useEffect } from 'react'
import './App.css'

const advantages = [
  'AI-POWERED BUDGET MATCHING',
  'PAN-INDIA PROPERTY COVERAGE',
  'VERIFIED LISTINGS ONLY',
  'ZERO BROKERAGE OPTIONS',
  'INSTANT LEGAL DOCUMENT CHECK',
]

const categories = [
  { id: '01', label: 'APARTMENTS', desc: 'Curated flats across metro and tier-2 cities, matched to your exact budget.' },
  { id: '02', label: 'VILLAS', desc: 'Premium standalone villas with private gardens and luxury finishes.' },
  { id: '03', label: 'PLOTS', desc: 'Residential and agricultural plots in prime growth corridors.' },
  { id: '04', label: 'PENTHOUSES', desc: 'Exclusive penthouses with panoramic skyline and city views.' },
  { id: '05', label: 'COMMERCIAL', desc: 'Office spaces and retail units ready for your business to scale.' },
]

const properties = [
  { id: 1, title: 'Prestige Lakeside', location: 'Whitefield, Bangalore', price: '₹1.2 Cr', type: 'Villa', beds: 4, area: '3,200 sqft', forRent: false },
  { id: 2, title: 'Lodha Altamount', location: 'South Mumbai', price: '₹8.5 Cr', type: 'Penthouse', beds: 5, area: '5,800 sqft', forRent: false },
  { id: 3, title: 'DLF The Camellias', location: 'Golf Course Rd, Gurugram', price: '₹1.8L/mo', type: 'Apartment', beds: 3, area: '2,100 sqft', forRent: true },
]

export default function App() {
  const [activeAdvantage, setActiveAdvantage] = useState(0)
  const [activeCategory, setActiveCategory] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <button className="nav-menu">☰ &nbsp;MENU</button>
        <span className="nav-brand">TERRASCOPE</span>
        <button className="nav-cta">CONTACT US</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">Pan India Property Search</p>
          <h1 className="hero-heading">
            YOUR DREAM<br />PROPERTY<span className="accent-dot">.</span>
          </h1>
          <p className="hero-sub">
            Find homes, villas, and plots that fit your budget — anywhere in India.
          </p>
          <div className="search-bar">
            <select className="search-select">
              <option value="">Select City</option>
              <option value="all">Pan India</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Delhi NCR</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Pune</option>
              <option>Kolkata</option>
              <option>Ahmedabad</option>
            </select>
            <select className="search-select">
              <option value="">Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Penthouse</option>
              <option>Commercial</option>
            </select>
            <select className="search-select">
              <option value="">Your Budget</option>
              <option>Under ₹50L</option>
              <option>₹50L – ₹1Cr</option>
              <option>₹1Cr – ₹3Cr</option>
              <option>₹3Cr – ₹10Cr</option>
              <option>Above ₹10Cr</option>
            </select>
            <button className="search-btn">SEARCH →</button>
          </div>
        </div>
        <button className="hero-arrow">↗</button>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <span className="stat-num">12,000+</span>
          <span className="stat-label">Active Listings</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">200+</span>
          <span className="stat-label">Cities Covered</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">₹10L – ₹50Cr</span>
          <span className="stat-label">Budget Range</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">98%</span>
          <span className="stat-label">Verified Listings</span>
        </div>
      </section>

      {/* WHY TERRASCOPE */}
      <section className="why-section">
        <div className="why-left">
          <p className="section-label">Why does it have to be TerraScope?</p>
          <h2 className="why-heading">Our Advantages</h2>
          <ul className="advantages-list">
            {advantages.map((adv, i) => (
              <li
                key={i}
                className={`advantage-item ${activeAdvantage === i ? 'active' : ''}`}
                onClick={() => setActiveAdvantage(i)}
              >
                <span>{adv}</span>
                {activeAdvantage === i && <span className="adv-arrow">→</span>}
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

      {/* CATEGORIES */}
      <section className="categories-section">
        <p className="section-label">Explore by Type</p>
        <div className="categories-top">
          <h2 className="categories-heading">COMFORT<br />&amp; SPACE</h2>
          <div className="category-tabs">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`cat-tab ${activeCategory === i ? 'active' : ''}`}
                onClick={() => setActiveCategory(i)}
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
            <span className="cat-num-big">{categories[activeCategory].id}</span>
            {categories[activeCategory].desc}
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-section">
        <div className="featured-header">
          <div>
            <p className="section-label">Handpicked for You</p>
            <h2 className="featured-heading">Featured Properties</h2>
          </div>
          <button className="view-all-btn">VIEW ALL →</button>
        </div>
        <div className="properties-grid">
          {properties.map(p => (
            <div key={p.id} className="property-card">
              <div className="property-img">
                <span className="property-type-tag">{p.type}</span>
                {p.forRent && <span className="badge-rent">FOR RENT</span>}
              </div>
              <div className="property-info">
                <div className="property-top">
                  <h3 className="property-title">{p.title}</h3>
                  <span className="property-price">{p.price}</span>
                </div>
                <p className="property-location">📍 {p.location}</p>
                <div className="property-meta">
                  <span>{p.beds} BHK</span>
                  <span>·</span>
                  <span>{p.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <span className="footer-brand">TERRASCOPE</span>
          <p className="footer-tagline">Finding your place in India.</p>
        </div>
        <div className="footer-bottom">
          <span>© 2025 TerraScope. All rights reserved.</span>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
