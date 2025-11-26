"use client";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/features/cart/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
    const cartItems = useContextSelector(CartContext, (v) => v.state.items);
    const setIsCartOpen = useContextSelector(CartContext, (v) => v.setIsCartOpen);
    const isCartOpen = useContextSelector(CartContext, (v) => v.isCartOpen);
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );
    {/* Show isCartOpen ALWAYS for debugging */ }
    <span style={{ color: "red", marginLeft: "10px" }}>
        isCartOpen: {JSON.stringify(isCartOpen)}
    </span>

    return (
        <>
            {isCartOpen && (
                <div
                    onClick={() => setIsCartOpen(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0, 0, 0, 0.4)", // أسود شفاف
                        zIndex: 900, // تحت الدرج
                    }}
                />
            )}

            <div style={{
                position: "fixed",
                width: "350px",
                right: 0,
                top: 0,
                height: "100vh",
                background: "white",
                zIndex: 1000,
                transition: "transform 0.3s ease",
                transform: isCartOpen ? "translateX(0)" : "translateX(100%)",
            }}>
                <button
                    onClick={() => setIsCartOpen(false)}
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        background: "transparent",
                        border: "none",
                        fontSize: "22px",
                        cursor: "pointer",
                    }}
                >
                    ×
                </button>

                <div style={{ marginTop: "60px" }}>
                    {cartItems.length === 0 && (
                        <p style={{ marginTop: "20px" }}>Your cart is empty.</p>
                    )}

                    {cartItems.map((item, idx) => (
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
                    <div style={{ display: "flex", gap: "40px" }}>
                        <h2>Total: $ {total}</h2>
                    </div>
                    <Link href="/cart" ><h2 style={{ color: "var(--title)", marginTop: "20px" }}>Go To Cart</h2></Link>
                </div>

            </div>
        </>
    );
}

