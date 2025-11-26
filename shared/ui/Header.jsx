"use client";

import { CartContext } from "@/features/cart/context/CartContext";
import {  useState } from "react";
import Link from "next/link";
import { useContextSelector } from "use-context-selector";
import MiniCart from "@/features/cart/components/MiniCart";


export default function Header() {
  const cartItems = useContextSelector(CartContext, (v) => v.state.items);
  const setIsCartOpen = useContextSelector(CartContext, (v) => v.setIsCartOpen);
  const [showMini, setShowMini] = useState(false);
  const count = cartItems.length;
  return (
    <header
      style={{
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)"
      }}
    >
      <Link href="/" ><h2 style={{ color: "var(--title)" }}>HomeStyle</h2></Link>


      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>



          {/* Cart Icon */}

          <div style={{ position: "relative", cursor: "pointer" }} 
          
          >
            <div href="/cart" style={{ position: "relative", cursor: "pointer" }}
            onMouseEnter={() => setShowMini(true)}
            onMouseLeave={() => setTimeout(() => setShowMini(false), 150)}
            >

         

              <img src="/icons/cart.svg" alt="cart" height="26" className="file: mt-4 h-6 w-6" onClick={() => setIsCartOpen(true)} />
              {showMini && <MiniCart />}
      

              {/* Badge */}
              {count > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-10px",
                    background: "var(--accent)",
                    color: "white",
                    fontSize: "12px",
                    padding: "2px 6px",
                    borderRadius: "50%"
                  }}
                >
                  {count}
                </span>
              )}
            </div>
          </div>
         


      </div>
    </header>
  );
}
