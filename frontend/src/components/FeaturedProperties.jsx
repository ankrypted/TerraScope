const properties = [
  { id: 1, title: 'Prestige Lakeside',  location: 'Whitefield, Bangalore',      price: '₹1.2 Cr',   type: 'Villa',      beds: 4, area: '3,200 sqft', forRent: false },
  { id: 2, title: 'Lodha Altamount',    location: 'South Mumbai',               price: '₹8.5 Cr',   type: 'Penthouse',  beds: 5, area: '5,800 sqft', forRent: false },
  { id: 3, title: 'DLF The Camellias', location: 'Golf Course Rd, Gurugram',   price: '₹1.8L/mo',  type: 'Apartment',  beds: 3, area: '2,100 sqft', forRent: true  },
]

export default function FeaturedProperties() {
  return (
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
  )
}
