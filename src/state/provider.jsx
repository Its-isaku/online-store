//? imports
import { useState } from "react";
import DataContext from "./DataContext";

function GlobalProvider(props) {
    //? variables
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({userName: "Isai"});

    //? functions

    function addProduct(prod) {
        //? 3 steps
        let copy = [...cart]; //? 1. copy cart
        copy.push(prod); //? 2. add product to cart
        setCart(copy); //? 3. set cart
    }

    function removeProduct() {
        //? remove product from cart
        let copy = [...cart]; //? 1. copy cart
        copy.pop(); //? 2. remove product from cart
        setCart(copy); //? 3. set cart
    }

    function clearCart() {
        setCart([]); //? clear cart
    }

    return (
        <DataContext.Provider value={{
            //* promise & functions
            cart: cart,
            user: user,
            addProduct: addProduct,
            removeProduct: removeProduct,
            clearCart: clearCart,
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalProvider;