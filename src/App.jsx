//? imports
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Catalog from "./components/Catalog"

//? App component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Footer></Footer>
    </>
  )
}

export default App