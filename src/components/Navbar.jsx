//? imports
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/cow-svgrepo-com.svg";
import { useContext } from "react";
import DataContext from "../state/DataContext";


function Navbar() {
    let user = useContext(DataContext).user;
    let cart = useContext(DataContext).cart;

    function getCartCount(){
        let cartCount = 0;
        cart.forEach((item) => { cartCount += item.quantity;}); //* loop through cart items and add quantity to cart count
        return cartCount; //* return cart count
    }


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
                <Link to="/admin">Admin</Link>
                <Link to="/cart">Cart</Link>
            </div>

            <div className="cartLogo">
                <a href="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <label className="itemCount"> {getCartCount()} </label>
                </a>
            </div>

            <div className="userContent">
                <label>
                    <i className="fa-regular fa-circle-user"></i>
                    {user.userName}
                </label>
            </div>
        </div>
        </>  
    );
}

//? imports
export default Navbar;