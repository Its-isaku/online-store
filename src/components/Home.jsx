//? imports
import "./Home.css";

function Home() {
    //? variables


    //? return
    return (
        <>
            <div className='Home-content'>
                <h1>Welcome to Chipis Farm Market</h1>

                <div className="HomeInfo">
                    <img
                        src="https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2021/08/farmers-market-produce-0812211.jpg"
                        alt="farm-img"
                        className="HomeImage"
                    />

                    <div className="HomeText">
                        <h2>Fresh, Local, and Sustainable</h2>
                        <p>
                            We are a family owned farm market located in the heart of the countryside. We offer a wide variety of fresh produce, meats, and dairy products sourced from local farms. Our mission is to provide our customers with the freshest and highest quality products while supporting our local farmers.
                        </p>

                        <p>
                            At Chipis Farm Market, we believe in sustainable farming practices and supporting our community. We work closely with local farmers to ensure that our products are grown and harvested with care. Our farm market is a place where you can find fresh, seasonal produce, as well as a selection of meats and dairy products that are free from hormones and antibiotics.
                        </p>
                    </div>

                </div>

                <div className="HomeCards">
                    <div className="HomeHighlights">
                        <h3>Why Shop With Us?</h3>
                        <ul>
                            <li>✔️ Locally sourced, farm-fresh products</li>
                            <li>✔️ Friendly and knowledgeable staff</li>
                            <li>✔️ Seasonal specials and promotions</li>
                            <li>✔️ Commitment to sustainability</li>
                        </ul>
                        <button>Shop Now</button>
                    </div>

                    <section className="HomeTestimonial">
                        <h3>What Our Customers Say</h3>
                        <blockquote>
                            "Chipis Farm Market always has the freshest produce and the friendliest staff. I love supporting local farmers!"<br />
                            <span>- Maria G.</span>
                        </blockquote>
                    </section>

                    <section className="HomeHours">
                        <h3>Market Hours</h3>
                        <ul>
                            <li>Monday - Friday: 8am - 6pm</li>
                            <li>Saturday: 8am - 4pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}

//? imports
export default Home;