//? imports
import "./AdminDiscounts.css";

function AdminDiscounts() {

    return (
        <div className="adminDiscounts">
            <h3>Discount</h3>
            <form className="discount-form">
                <div>
                    <label htmlFor="code">Code:</label>
                    <input type="text" id="code" name="code" />
                </div>
                
                <div>
                    <label htmlFor="percentage">Percentage:</label>
                    <input type="number" id="percentage" name="percentage" min="0" max="100" />
                </div>
                <button type="submit">Add Discount</button>
            </form>
        </div>
    );
}

//? imports
export default AdminDiscounts;