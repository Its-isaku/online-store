//? imports
import "./Contact.css";

function Contact() {
    //? variables
    

    //? functions

    //? return
    return(
        <>
            <div className="ContactContainer">
                <div className="contactUs">
                    <div className="contactUsContainer">
                        <h1>Contact Us</h1>
                        <p>Have questions or feedback? We'd love to hear from you! Reach out to us using any of the methods below.</p>
                    </div>

                </div>

                <div className="ContactCards">
                    <div className="card Phone">
                        <i class="fa-solid fa-phone-volume"></i>
                        <div className="cardInfo">
                            <h2>Phone</h2>
                            <p>+1 (555) 123-4567</p>
                            <button>Call us</button>
                        </div>
                    </div>

                    <div className="card Email">
                        <i class="fa-solid fa-envelope"></i>
                        <div className="cardInfo">
                            <h2>Email</h2>
                            <p>info@chipisfarm.com</p>
                            <button>Email us</button>
                        </div>
                    </div>

                    <div className="card Address">
                        <i class="fa-solid fa-comment"></i>
                        <div className="cardInfo">
                            <h2>Address</h2>
                            <p>123 Farm Road,
                            Countryside, CA 12345</p>
                            <button>Get directions</button>
                        </div>
                    </div>
                </div>
            </div>
        </>  
    );
}

//? imports
export default Contact;