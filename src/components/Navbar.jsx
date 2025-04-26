//? imports
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {



    return(
        <>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="admin">Admin</Link>
            </div>
        </>  
    );
}

//? imports
export default Navbar;