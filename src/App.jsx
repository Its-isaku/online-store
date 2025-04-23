//? imports
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Catalog from "./components/Catalog"
import About from './components/about'
import Home from './components/Home'

//? App component
function App() {
  //? variables

  //? functions

  //? return
  return (
    <>
      <Navbar/>

      <div className="main-content">
        <Home/>
        <Catalog/>
        <About/>
        {/* <Contact></Contact>  */}
      </div>
      
      <Footer/>
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