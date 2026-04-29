const RATE_INFO = {
  circle: {
    label: 'Circle Rate',
    badge: 'CIRCLE RATE',
    badgeClass: 'badge-circle',
    note: 'Set by the state government as the minimum price at which a property can be registered. Actual sale prices in the market are typically 20–50% higher than this.',
  },
  market: {
    label: 'Market Rate',
    badge: 'MARKET RATE',
    badgeClass: 'badge-market',
    note: 'Actual asking/transaction prices from real estate listings. This is what buyers and sellers are transacting at in the open market.',
  },
}

function RateInfoBanner({ results }) {
  const types = [...new Set(results.map(c => c.rateType))]
  return (
    <div className="rate-info-banner">
      {types.map(type => {
        const info = RATE_INFO[type]
        return (
          <div key={type} className="rate-info-item">
            <span className={`rate-type-badge ${info.badgeClass}`}>{info.badge}</span>
            <p>{info.note}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function SearchResults({ results, query, onClear }) {
  const totalLocalities = results.reduce((sum, c) => sum + c.localities.length, 0)
  const cityLabel = query.city === 'all' || !query.city ? 'Pan India' : query.city

  return (
    <section className="search-results">
      <div className="results-header">
        <div>
          <p className="section-label">Residential Property Rates</p>
          <h2 className="results-heading">{cityLabel}</h2>
          <p className="results-meta">
            {totalLocalities} {totalLocalities === 1 ? 'locality' : 'localities'} found
            {query.budget ? ` · ${query.budget}` : ''}
          </p>
        </div>
        <button className="clear-btn" onClick={onClear}>✕ CLEAR</button>
      </div>

      <RateInfoBanner results={results} />

      {results.length === 0 ? (
        <div className="no-results">
          <p>No localities found for your filters. Try widening your budget or selecting a different city.</p>
        </div>
      ) : (
        results.map(cityData => {
          const info = RATE_INFO[cityData.rateType]
          return (
            <div key={cityData.city} className="city-group">
              {results.length > 1 && (
                <div className="city-group-header">
                  <span className="city-group-name">{cityData.city}</span>
                  <span className="city-group-state">{cityData.state}</span>
                  <span className={`rate-type-badge ${info.badgeClass}`}>{info.badge}</span>
                </div>
              )}
              {cityData.rateType === 'circle' && results.length === 1 && (
                <p className="circle-market-note">
                  ⚠ These are government circle rates — the legal minimum for property registration. Actual market prices are typically 20–50% higher.
                </p>
              )}
              <div className="localities-grid">
                {cityData.localities.map(loc => (
                  <div key={loc.locality} className="locality-card">
                    <div className="locality-top">
                      <span className="locality-zone">{loc.zone || loc.category || '—'}</span>
                      <span className={`rate-type-badge ${info.badgeClass}`}>{info.badge}</span>
                    </div>
                    <h3 className="locality-name">{loc.locality}</h3>
                    <div className="locality-rates">
                      <div className="rate-range">
                        <span className="rate-label">{info.label} / sqft</span>
                        <span className="rate-value">
                          {loc.minRate === loc.maxRate
                            ? `₹${loc.minRate.toLocaleString('en-IN')}`
                            : `₹${loc.minRate.toLocaleString('en-IN')} – ₹${loc.maxRate.toLocaleString('en-IN')}`}
                        </span>
                      </div>
                      {loc.circleRate && (
                        <div className="rate-range">
                          <span className="rate-label">Circle Rate / sqft</span>
                          <span className="rate-value rate-circle">₹{loc.circleRate.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <div className="rate-range rate-range--entry">
                        <span className="rate-label">Min. price for 500 sqft flat</span>
                        <span className="rate-value entry-price">
                          ₹{(loc.minRate * 500 / 100000).toFixed(1)}L
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })
      )}
    </section>
  )
}
