//? imports
import { useState } from "react";
import "./AdminDiscounts.css";

function AdminDiscounts() {
    //? variables
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: "",
        percentage: "",
    });

    //? functions 
    function handleInput(e) {
        const { name, value } = e.target;

        let copy = { ...coupon };
        if (name === "code") {copy.code = value;} 
        else if (name === "percentage") {copy.percentage = parseFloat(value);}
        setCoupon(copy);
    }


    function save(e) {
        e.preventDefault();
        const code = coupon.code.trim();
        const percentage = Number(coupon.percentage);

        if (!code) {
            alert("Code cannot be empty");
            return;
        }

        if (coupon.percentage === "" || percentage < 0 || percentage > 100) {
            alert("Percentage must be a number between 0 and 100");
            return;
        }

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);

        console.log("Coupon is valid");
        console.log({ code, percentage });
    }

    return (
        <div className="adminDiscounts">
            <div className="discount-form-container">
                <div>
                    <h3>Discount</h3>
                    <p>Create a new discount code</p>
                </div>

                <form className="discount-form">
                    <div className="discount-form-input">
                        <label htmlFor="code">Code:</label>
                        <input onBlur={handleInput} type="text" name="code" />
                    </div>
                    
                    <div className="discount-form-input">
                        <label htmlFor="percentage">Percentage:</label>
                        <input onBlur={handleInput} type="number" name="percentage" min="0" max="100" />
                    </div>
                    <button onClick={save} type="submit">Add Discount</button>
                </form>
            </div>

            <div className="discount-list">
                <h3>Discounts List</h3>
                <ul>
                    {allCoupons.map((cp, cpDiscription) => (<li key={cp.code || cpDiscription}>{cp.code} - {cp.percentage}%</li>))}
                </ul>
            </div>

        </div>
    );
}

//? imports
export default AdminDiscounts;