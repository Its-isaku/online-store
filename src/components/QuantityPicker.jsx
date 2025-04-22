//? imports
import { useState } from "react";
import "./QuantityPicker.css";

//? QuantityPicker component
function QuantityPicker() {
    //? variables
    const [quantity, setQuantity]  = useState(1);

    //? functions
    function increase(){
        console.log("increase")
        if(quantity < 9){
            setQuantity(quantity + 1);
        }
    }

    function decrease(){
        console.log("decrease")
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    //? return
    return(
        <>
            <div className='QuantityPicker'>
                <button disabled={quantity == 1} onClick={decrease}>-</button>
                <label>{quantity}</label>
                <button disabled={quantity == 9} onClick={increase}>+</button>
            </div>
        </>  
    );  
}

//? imports
export default QuantityPicker;