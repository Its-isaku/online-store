//? imports
import { useState } from "react";
import "./About.css";



function About() {
    //? variables
    const [email, setEmail] = useState(false);

    //? functions
    function showEmail(){
        setEmail(!email);
    }

    //? return
    return(
        <>
            <div className='aboutContent'>
                <img src="https://i.ytimg.com/vi/toGH5K8tZXs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC25hYyKQPoXACW9swdyDNlCw94IA" alt="farm" />

                <div className="aboutInfo">
                    <h2>Almeraz Landeros Isai Magdaleno</h2>
                    <h3 className={`email-transition ${email ? 'visible' : ''}`}>Isaialmeraz2003@gmail.com</h3>
                    <button onClick={showEmail}>See Email</button>
                </div>
            </div>
        </>  
    );
}

//? imports
export default About;