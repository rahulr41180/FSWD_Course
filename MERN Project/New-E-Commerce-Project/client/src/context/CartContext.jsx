
import { useState, useEffect, useContext, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    // console.log('cartItems:', cartItems)
    

    const handleCart = (element) => {
        console.log('element1:', element)

        // console.log("cartItems[element?._id] :", cartItems[element?._id])

        setCartItems((prev) => {  
            const itemId = element?._id
            console.log('prev:', prev)
            // console.log('prev[element?._id]:', prev[element?._id])
            if(!prev[itemId]) {
                console.log("false :", false);
                return {
                    
                    ...prev,
                    [itemId] : [element, 1]
                }
                // prev[element._id] = [element, 1];
                
            } else if(prev[element?._id]) {
                console.log("true :", true);
                return {
                    ...prev,
                    
                    [itemId] : [prev[itemId][0], prev[itemId][1] + 1]
                }
            }
        })
        console.log('cartItems1:', cartItems);
    }
    
    useEffect(() => {
        console.log('cartItems2:', cartItems);
    },[cartItems])
    return (

        <CartContext.Provider value={[cartItems, setCartItems, handleCart]}>{children}</CartContext.Provider>

    )
}


export const useCartContext = () => {
    return useContext(CartContext);
}