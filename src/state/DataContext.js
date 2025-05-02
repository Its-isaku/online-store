/**
*? The context is just an interface
*? a description / promise of the data structure
*? it should not have any implementation
**/

//? imports
import {createContext} from 'react';

//? variables
const DataContext = createContext({
    //* promise & functions
    cart: [],
    user:{},

    addProduct: () => {},
    removeProduct: () => {},
    clearCart: () => {},
});

export default DataContext;