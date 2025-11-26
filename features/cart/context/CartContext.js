"use client";
import { createContext, useReducer, useState } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        isCartOpen,
        setIsCartOpen,   // ← MUST BE INCLUDED HERE!
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
