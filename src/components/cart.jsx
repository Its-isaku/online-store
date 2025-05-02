//? imports
import { useContext } from "react";
import "./Cart.css";
import DataContext from "../state/DataContext";
import QuantityPicker from "./QuantityPicker";


function Cart() {
    //? variables
    let cart = useContext(DataContext).cart;
    let clearCart = useContext(DataContext).clearCart;
    let removeProduct = useContext(DataContext).removeProduct

    function CartTotal(){
        let cartCount = 0;
        cart.forEach((item) => { cartCount += item.quantity;}); //* loop through cart items and add quantity to cart count
        return cartCount; //* return cart count
    }

    function Clear() {
        clearCart(); //* clear cart function
    } 

    function Remove() {
        removeProduct(); //* remove product function
    } 

    function CheckoutTotal() {
        let total = 0;
        cart.forEach(prod => { total += prod.price * prod.quantity;}); //* loop through cart items and add price to total
        return total.toFixed(2); //* return total price
    }

    //? return
    return (
        <>
            <div className='cartContent'>

                <div className="cartTitleContainer">
                    <div className="cartTitleInfo">
                        <h1>Your cart</h1>
                        <p>you have {CartTotal()} items in your cart</p>
                    </div>
                </div>

                <div className="mainCartContainer">
                    <div className="CartList">
                        <div className="listHeader">
                            <h3>Shopping Cart({CartTotal()})</h3>
                            <button className="clearCartBtn" onClick={Clear}>Clear cart</button>
                        </div>

                        {CartTotal() !== 0 ? 
                            cart.map(prod => 
                                <div className="cartItem" key={prod.id}>
                                    <div className="leftCartSide">
                                        <img src={prod.image} alt="img" />
                                        <div className="cartprodInfo1">
                                            <h3>{prod.title}</h3>
                                            <p>Category: {prod.category}</p>
                                            <label>Price: ${prod.price.toFixed(2)}</label>
                                        </div>
                                    </div>
                                    <div className="cartprodInfo2">
                                        <div>
                                            <QuantityPicker />
                                        </div>

                                        <div className="cartTotal">
                                            <label>Total Price: ${(prod.price * prod.quantity).toFixed(2)}</label>
                                            <button className="RemoveBtn" onClick={Remove}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            <div className="emptyCartMessage">
                                <div>
                                    <i class="fa-solid fa-face-frown"></i>
                                    <p>Your cart is empty.</p>
                                </div>

                                <div className="catalogMsg">
                                    <p>Go back to the </p>
                                    <a href="/catalog">catalog</a>
                                    <p> and add some products.</p>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="sideMenu">
                        <div className="sideMenuHeader">
                            <h3>Order Summary</h3>
                        </div>

                        <div className="sideMenuContent">
                            <div className="checkoutTotals">
                                <label>Total Price: ${CheckoutTotal()}</label>
                            </div>
                            {CartTotal() !== 0 ?
                                <button className="checkoutBtn">Checkout</button>
                                : 
                                <button className="checkoutBtn" disabled>Checkout</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 

//? imports
export default Cart;