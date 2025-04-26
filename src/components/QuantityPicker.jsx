//? imports
import "./QuantityPicker.css";

//? QuantityPicker component
function QuantityPicker({ quantity, setQuantity }) {
    //? functions
    function increase(){
        if(quantity < 9){
            setQuantity(quantity + 1);
        }
    }

    function decrease(){
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