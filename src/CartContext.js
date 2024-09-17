import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext = createContext()

const CartProvider =({children})=>{
const[cart,dispatch] = useReducer(cartReducer,[])


return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;