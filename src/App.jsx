import { useState } from 'react'
import { Search } from "./components/search";
import { Weather } from "./components/weather";
import './App.css'

function App() {
  const [city, setCity] = useState('Pasto')

  return (
    <div className="card">
      <Search setCity={setCity} />
      <Weather city={city}/>
    </div>
  )
}

export default App
