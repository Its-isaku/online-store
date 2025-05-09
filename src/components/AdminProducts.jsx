//? imports
import { useEffect, useState } from "react";
import "./AdminProducts.css";
import dataService from "../services/dataService";

function AdminProducts() {
    //? variables
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        category: "",
        image: "",
        price: "",
    });

    //? useEffect
    useEffect(() => {
        loadProducts();
    }, []);
    
    //? functions 
    function handleInput(e) {
        const { name, value } = e.target;

        let copy = { ...product };
        if (name === "title") {copy.title = value;}
        else if (name === "category") {copy.category = value;} 
        else if (name === "image") {copy.image = value;} 
        else if (name === "price") {copy.price = parseFloat(value);}
        setProduct(copy);
    }


    async function save(e) {
        e.preventDefault();
        const title = product.title.trim();
        const category = product.category;
        const image = product.image.trim();
        const price = Number(product.price);
    
        if (!title) {
            alert("Title cannot be empty");
            return;
        }
        if (!category) {
            alert("Category must be selected");
            return;
        }
        if (!image) {
            alert("Image cannot be empty");
            return;
        }
        if (product.price === "" || price < 0) {
            alert("Price must be a positive number");
            return;
        }
    
        console.log("Product is valid");
        console.log({ title, category, image, price });

        //? save product to the backend
        let response = await dataService.saveProduct(product)
        console.log(response);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    async function loadProducts(){
        let response = await dataService.getCatalog();
        console.log(response);
        setAllProducts(response);
    }
    

    return (
        <div className="adminProducts">
            <div className="product-form-container">
                <div>
                    <h3>New Products</h3>
                    <p>Add a new product to your catalog</p>
                </div>

                <form className="product-form" onSubmit={save}>
                    <div className="product-form-input">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" onChange={handleInput} />
                    </div>

                    <div className="product-form-input">
                        <label htmlFor="category">Category:</label>
                        <select id="category" name="category" value={product.category} onChange={handleInput}>
                            <option disabled value="">Select Category</option>
                            <option value="fruit">Fruit</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="dairy">Dairy</option>
                            <option value="meat">Meat</option>
                        </select>
                    </div>

                    <div className="product-form-input">
                        <label htmlFor="image">Image:</label>
                        <input type="text" id="image" name="image" onChange={handleInput} />
                    </div>

                    <div className="product-form-input">
                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" name="price" min="0" step="0.01" onChange={handleInput} />
                    </div>
                    <button type="submit">Add Product</button>
                </form>
            </div>

            <div className="products-list">
                <h3>New Product List</h3>
                <ul>
                    {allProducts.map((prod, prodDiscription) => (
                        <li key={prodDiscription}>
                            {prod.title} - ${prod.price}
                            <div><img src={prod.image} alt={prod.title} /></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

//? imports
export default AdminProducts;