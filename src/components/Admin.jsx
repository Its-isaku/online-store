//? imports
import "./Admin.css";
import AdminDiscounts from "./AdminDiscounts";
import AdminProducts from "./AdminProducts";

function Admin() {

    return (
        <div className="adminContainer">
            <div className="InfoContainer">
                <h1>Chipis Farm Market - Admin Panel</h1>
                <p>Manage your farm-fresh organic products and check your market status.</p>
            </div>

            <div className="adminContent">
                <AdminProducts />
                <AdminDiscounts />
            </div>
        </div>
    );
}

//? imports
export default Admin;