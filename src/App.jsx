import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[url('./src/images/10475996-3x2-940x627.jpeg')] bg-left-top bg-cover">
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App
