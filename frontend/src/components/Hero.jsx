export default function Hero() {
  return (
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
            <option>Delhi</option>
            <option>Gurgaon</option>
            <option>Noida</option>
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
  )
}
