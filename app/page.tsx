import ProductGrid from "@/features/products/components/ProductGrid";
import CartDrawer from "@/features/cart/components/CartDrawer";

export default function Home() {
  return (
    <>
      <CartDrawer />
      <ProductGrid />
    </>
  );
}
