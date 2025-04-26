//? imports
import "./Admin.css";
import AdminDiscounts from "./AdminDiscounts";
import AdminProducts from "./AdminProducts";

function Admin() {

    return (
        <div className="admin-container">
            <h2 className="admin-title">Chipis Farm Market - Admin Panel</h2>
            <p className="admin-description">
                Manage your farm-fresh organic products and check your market status.
            </p>

            <div className="adminContent">
                <AdminProducts />
                <AdminDiscounts />
            </div>
        </div>
    );
}

//? imports
export default Admin;