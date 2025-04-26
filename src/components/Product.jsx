//? imports
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

function Product(props) {
    //? variables
    const [quantity, setQuantity] = useState(1);

    //? functions

    //? return
    return(
        <>
            <div className='product'>
                <img src={props.data.image} alt="img" />
                
                <div className="productInfo">
                    <h3>{props.data.title}</h3>
                    
                    <label> Category: {props.data.category}</label>
                    <div className="product-price">
                        <label> Price: <small>${props.data.price.toFixed(2)}</small></label>
                        <label> Total: <small>${(props.data.price * quantity).toFixed(2)}</small></label>
                    </div>
                </div>

                <div className="product-actions">
                    <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
                    <button>add to <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </>  
    );
}

//? imports
export default Product; 