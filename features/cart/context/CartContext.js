"use client";
import {  useReducer, useState } from "react";
import { createContext } from "use-context-selector";

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
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
