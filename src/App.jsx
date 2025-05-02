//? imports
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Catalog from "./components/Catalog"
import About from './components/about'
import Home from './components/Home'
import Admin from './components/Admin'
import Contact from './components/contact'
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import GlobalProvider from './state/provider'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from './components/cart';

//? App component
function App() {
  //? variables

  //? functions

  //? return
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <div className='main-content'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App