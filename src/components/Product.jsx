//? imports
import DataContext from "../state/DataContext";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useContext, useState } from "react";

function Product(props) {
    //? variables
    const [quantity, setQuantity] = useState(1);
    const addProduct = useContext(DataContext).addProduct;

    //? functions

    function add(){
        //* add product to cart
        let prodForCart = {...props.data, quantity}; //* add quantity to product

        console.log("Adding product to cart...");
        addProduct(prodForCart); //* add product to cart
    }

    function handleQuantity(qty) {setQuantity(qty); }//* set quantity

    function getTotal(){ return (props.data.price * quantity).toFixed(2);}//* calculate total

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
                        <label> Total: <small>${getTotal()}</small></label>
                    </div>
                </div>

                <div className="product-actions">
                    <QuantityPicker value={quantity} onChange={handleQuantity}/>
                    <button onClick={add}>add to <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </>  
    );
}

//? imports
export default Product; 