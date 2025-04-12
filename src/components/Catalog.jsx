//? imports
import "./Catalog.css";
import Product from "./product";


function Catalog() {
    //? variables


    //? return
    return(
        <>
            <div className='catalog-content'>
                <h1>Take a look to our catalog!</h1>

                <div className="catalog-list">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                </div>
            </div>
        </>  
    );
}

//? imports
export default Catalog;