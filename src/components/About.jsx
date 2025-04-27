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
                <div className="aboutImg">
                    <h1>Almeraz Landeros Isai Magdaleno</h1>
                </div>

                <div className="aboutInfo">
                    <div className="story">
                        <h1>Our Story</h1>

                        <p>Founded in 1985 by Isai Magdaleno, Chipis Farm Market started as a small roadside stand selling fresh produce from the family farm. Over the years, it has grown into a beloved community marketplace where locals and visitors alike can find the freshest, highest-quality produce, dairy, and meats from farms across the region.</p>

                        <p>Our founder's passion for sustainable agriculture and community support drives everything we do. We work closely with local farmers who share our values of environmental stewardship and ethical farming practices.</p>

                        <p>Today, Chipis Farm Market remains family-owned and operated, with a commitment to the same principles that guided us from the beginning: supporting local agriculture, providing exceptional quality, and creating a direct connection between farmers and consumers.</p>
                    </div>

                    <div className="values">
                        <h1>Our Values</h1>

                        <div>
                            <h3>Sustainability</h3>
                            <p>We prioritize environmentally sustainable farming methods and business practices.</p>
                        </div>

                        <div>
                            <h3>Community</h3>
                            <p>We're committed to strengthening the local economy and fostering community connections.</p>
                        </div>

                        <div>
                            <h3>Quality</h3>
                            <p>We never compromise on the quality of our products – only the best makes it to our shelves.</p>
                        </div>

                        <div>
                            <h3>Education</h3>
                            <p>We believe in helping our customers learn about where their food comes from and how it's produced.</p>
                        </div>
                    </div>
                </div>

                <div className="aboutEmail">
                    <h2>Get in Touch</h2>
                    <p>Have questions about our products or want to learn more about our farm partners? We'd love to hear from you!</p>
                    <h3 className={`email-transition ${email ? 'visible' : ''}`}>Isaialmeraz2003@gmail.com</h3>
                    <button onClick={showEmail}>See Email</button>
                </div>
            </div>
        </>  
    );
}

//? imports
export default About;