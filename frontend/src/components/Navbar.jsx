import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button className="nav-menu">☰ &nbsp;MENU</button>
      <span className="nav-brand">TERRASCOPE</span>
      <button className="nav-cta">CONTACT US</button>
    </nav>
  )
}
