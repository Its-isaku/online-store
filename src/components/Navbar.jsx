//? imports
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/cow-svgrepo-com.svg";


function Navbar() {



    return(
        <>
        <div className="navbar">
            <div className="navTitle">
                <a href="/Home">
                    <img src={logo} alt="Chipis Farm Logo" className="logo" />
                    <h1>Chipis Farm Market</h1>
                </a>
            </div>

            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="admin">Admin</Link>
            </div>

            <div className="cartLogo">
                <a href="">
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>
            </div>
        </div>
        </>  
    );
}

//? imports
export default Navbar;