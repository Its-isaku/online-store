//? imports
import "./AdminProducts.css";

function AdminProducts() {

    return (
        <div className="adminProducts">
            <h3>New Products</h3>
            <form className="product-form">
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />
                </div>

                <div>
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category">
                        <option disabled selected>Select Category</option>
                        <option value="fruit">Fruit</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="price">Image:</label>
                    <input type="text" id="price" name="price" min="0" step="0.01" />
                </div>

                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" min="0" step="0.01" />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

//? imports
export default AdminProducts;