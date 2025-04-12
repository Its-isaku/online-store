//? imports
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Catalog from "./components/Catalog"

//? App component
function App() {
  //? variables

  //? return
  return (
    <>
      <Navbar></Navbar>

      <div className="main-content">
        <Catalog></Catalog>
      </div>
      
      <Footer></Footer>
    </>
  )
}

export default App