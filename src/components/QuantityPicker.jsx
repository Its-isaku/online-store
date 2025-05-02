//? imports
import { useState } from "react";
import "./QuantityPicker.css";

//? QuantityPicker component
function QuantityPicker(props) {
    //? variables
    const [quantity, setQuantity] = useState(1);

    //? functions
    function increase(){
        if(quantity < 15){
            const val = quantity + 1;
            setQuantity(val);
            props.onChange(val);
        }
    }

    function decrease(){
        if(quantity > 1){
            const val = quantity - 1;
            setQuantity(val);
            props.onChange(val);
        }
    }

    //? return
    return(
        <>
            <div className='QuantityPicker'>
                <button disabled={quantity == 1} onClick={decrease}>-</button>
                <label>{quantity}</label>
                <button disabled={quantity == 15} onClick={increase}>+</button>
            </div>
        </>  
    );  
}

//? imports
export default QuantityPicker;