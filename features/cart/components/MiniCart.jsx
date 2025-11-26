"use client";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/features/cart/context/CartContext";
import Link from "next/link";

export default function MiniCart() {
    const cartItems = useContextSelector(CartContext, (v) => v.state.items);
    const miniCartItems = cartItems.slice(0, 3);


    return (
        <>
            

            <div style={
                {
                    position: "absolute",
                    top: "40px",
                    right: 0
                }
            }> Hi

                {miniCartItems.length === 0 && (
                    <p style={{ marginTop: "20px" }}>Your cart is empty.</p>
                )}

                {miniCartItems.map((item, idx) => (
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
                    </div>
                ))}
            </div>
        </>
    );
}

