"use client";

import { useEffect } from "react";
import { CartContext } from "@/features/cart/context/CartContext";
import { CartItem } from "@/features/cart/types";
import { useContextSelector } from "use-context-selector";

export default function CartPage() {
  const cartItems = useContextSelector(CartContext, (v) => v.state.items);
  const setIsCartOpen = useContextSelector(CartContext, (v) => v.setIsCartOpen);
  const dispatch = useContextSelector(CartContext, (v) => v.dispatch);

  useEffect(() => {
    setIsCartOpen(false);
  }, []);
  const total = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.qty,0
  );

  return (
    
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "var(--title)" }}>Your Cart</h1>

      {cartItems.length === 0 && (
        <p style={{ marginTop: "20px" }}>Your cart is empty.</p>
      )}

      {cartItems.map((item: CartItem, idx: number) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <h3 style={{ color: "var(--title)" }}>{item.name}</h3>
            <p>${item.price}</p>
          </div>

          <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })} >+</button>
          <span>{item.qty}</span>
          <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>-</button>


          <button
            style={{
              background: "var(--accent)",
              padding: "8px 14px",
              borderRadius: "6px",
              color: "white",
            }}
            onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
          >
            Remove
          </button>
        </div>
      ))}
      <div style={{ display: "flex", gap: "40px" }}>
        <h2>Total: $ {total}</h2>
      </div>
      
    </div>
  );
}
