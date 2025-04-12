//? imports
import { useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";


function Product() {
    //? variables
    

    //? functions


    //? return
    return(
        <>
            <div className='product'>
                <img src="https://picsum.photos/200/300" alt="img" />
                
                <h3>Product Title</h3>

                <div className="product-actions">
                <QuantityPicker></QuantityPicker>

                    <button>add to <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </>  
    );
}

//? imports
export default Product; 