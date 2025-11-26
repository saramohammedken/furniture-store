"use client";

import { useContext } from "react";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { CartContext } from "@/features/cart/context/CartContext";

export default function ProductItem({ product }) {
  const { dispatch } = useContext(CartContext);
  const { state } = useContext(CartContext);
  return (
    <Card>
      <img
        src={product.img}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ marginTop: 12, color: "var(--title)" }}>{product.name}</h3>
      <p style={{ color: "var(--text)" }}>${product.price}</p>

      <Button onClick={() => dispatch({ type: "ADD", payload: product })}>
        Add to Cart
      </Button>
    </Card>
  );
}
