
import { useState, useEffect, useContext, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <CartContext.Provider value={[cartItems, setCartItems]}>{ children }</CartContext.Provider>
    )
}


export const useCartContext = () => {
    return useContext(CartContext);
}