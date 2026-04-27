import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState('checking...')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setApiStatus(data.message))
      .catch(() => setApiStatus('backend not reachable'))
  }, [])

  return (
    <div className="App">
      <h1>TerraScope</h1>
      <p>Find your perfect property across India</p>
      <p>API: {apiStatus}</p>
    </div>
  )
}

export default App
