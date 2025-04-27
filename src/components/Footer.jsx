//? imports
import "./Footer.css";


function Footer() {
    return(
        <>
            <div>
                <footer>
                    <div className="section1">
                        <div className="Info">
                            <h3>Chipis Farm Market</h3>
                            <p>Fresh, local, and sustainable products directly from farmers to your table.</p>
                            <p>123 Farm Road, Countryside, CA 12345</p>
                        </div>
                        
                        <div className="QuickLinks">
                            <h3>Quick Links</h3>
                            <a href="/Home">HOME</a>
                            <a href="/Catalog">CATALOG</a>
                            <a href="/About">ABOUT</a>
                            <a href="/Contact">CONTACT</a>
                            <a href="/Admin">ADMIN</a>
                        </div>
                        
                        <div className="Contact">
                        <h3>Contact Us</h3>
                            <p>Phone: (555) 123-4567</p>
                            <p>Email: info@chipisfarm.com</p>
                        </div>
                    </div>
                    
                    <div className="Copyright">
                        <p>Created by Isai Almeraz © 2025 Chipis Farm Market. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>  
    );
} 

//? imports
export default Footer;