export interface CartItem {
    id: number;
    name: string;
    price: number;
    img?: string; // optional
    qty: number; // optional
}

export interface CartState {
  items: CartItem[];
}

export interface CartAction {
  type: string;
  payload?: any;
}