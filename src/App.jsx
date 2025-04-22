//? imports
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Catalog from "./components/Catalog"
import About from './components/about'

//? App component
function App() {
  //? variables

  //? return
  return (
    <>
      <Navbar></Navbar>

      <div className="main-content">
        <Catalog></Catalog>
        <About></About>
      </div>
      
      <Footer></Footer>
    </>
  )
}

export default App

/**  
 * TODO

*? Create a Home Page 
**  Render Home page above the Catalog Page

*?Home Page should contain:  
**  - Image
**  - Text
**  - etc
 */