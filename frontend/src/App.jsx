import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhySection from './components/WhySection'
import Categories from './components/Categories'
import FeaturedProperties from './components/FeaturedProperties'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <WhySection />
      <Categories />
      <FeaturedProperties />
      <Footer />
    </div>
  )
}
