"use client";

import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Wooden Chair", price: 120, img: "https://trendingtemplates.com/demos/homestyle/upload/shop_04.jpg" },
  { id: 2, name: "Luxury Sofa", price: 899, img: "https://trendingtemplates.com/demos/homestyle/upload/widget_02.jpg" },
  { id: 3, name: "Modern Chair", price: 455, img: "https://trendingtemplates.com/demos/homestyle/upload/widget_01.jpg" },
  { id: 4, name: "Modern Chair", price: 455, img: "https://trendingtemplates.com/demos/homestyle/upload/project_02.jpg" },
  { id: 5, name: "Modern Chair", price: 455, img: "https://trendingtemplates.com/demos/homestyle/upload/project_04.jpg" },
  { id: 6, name: "Modern Chair", price: 455, img: "https://trendingtemplates.com/demos/homestyle/upload/project_03.jpg" },
  { id: 7, name: "Modern Chair", price: 455, img: "https://trendingtemplates.com/demos/homestyle/upload/project_05.jpg" },
  { id: 8, name: "Modern Chair", price: 455, img: "https://trendingtemplates.com/demos/homestyle/upload/project_06.jpg" },
  { id: 9, name: "Modern Chair", price: 455, img: "https://trendingtemplates.com/demos/homestyle/upload/project_07.jpg" },
];

export default function ProductGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px",
        padding: "40px",
      }}
    >
      {products.map(p => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}
