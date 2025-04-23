//? imports
import "./Product.css";
import QuantityPicker from "./QuantityPicker";


function Product(props) {
    //? variables
    

    //? functions


    //? return
    return(
        <>
            <div className='product'>
                <img src={props.data.image} alt="img" />
                
                <div className="productInfo">
                    <h3>{props.data.title}</h3>
                    
                    <label> Category: {props.data.category}</label>
                    <div>
                        <label> Price: <small>${props.data.price.toFixed(2)}</small></label>
                    </div>
                </div>

                <div className="product-actions">
                <QuantityPicker/>

                    <button>add to <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </>  
    );
}

//? imports
export default Product; 