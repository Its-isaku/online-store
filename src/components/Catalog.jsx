//? imports
import mockCatalog from "../services/dataService";
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
                <Product data={mockCatalog[0]}></Product>
                <Product data={mockCatalog[1]}></Product>
                <Product data={mockCatalog[2]}></Product>
                <Product data={mockCatalog[3]}></Product>
                <Product data={mockCatalog[4]}></Product>
                <Product data={mockCatalog[5]}></Product>
                <Product data={mockCatalog[6]}></Product>
                <Product data={mockCatalog[7]}></Product>
                <Product data={mockCatalog[8]}></Product>
                <Product data={mockCatalog[9]}></Product>
                </div>
            </div>
        </>  
    );
}

//? imports
export default Catalog;