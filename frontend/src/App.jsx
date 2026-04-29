import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhySection from './components/WhySection'
import Categories from './components/Categories'
import FeaturedProperties from './components/FeaturedProperties'
import Footer from './components/Footer'
import SearchResults from './components/SearchResults'

export default function App() {
  const [searchResults, setSearchResults] = useState(null)
  const [searchQuery, setSearchQuery] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async ({ city, budget }) => {
    setLoading(true)
    const params = new URLSearchParams()
    if (city) params.set('city', city)
    if (budget) params.set('budget', budget)

    const res = await fetch(`http://localhost:5000/api/search?${params}`)
    const data = await res.json()
    setSearchResults(data)
    setSearchQuery({ city, budget })
    setLoading(false)

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleClear = () => {
    setSearchResults(null)
    setSearchQuery(null)
  }

  return (
    <div className="app">
      <Navbar />
      <Hero onSearch={handleSearch} />
      {loading && <div className="search-loading">Searching localities...</div>}
      {!loading && searchResults !== null && (
        <SearchResults results={searchResults} query={searchQuery} onClear={handleClear} />
      )}
      {searchResults === null && !loading && (
        <>
          <Stats />
          <WhySection />
          <Categories />
          <FeaturedProperties />
        </>
      )}
      <Footer />
    </div>
  )
}
