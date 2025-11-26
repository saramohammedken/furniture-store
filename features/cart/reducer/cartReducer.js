export const initialState = { items: [] };

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const existing = state.items.find(i=>i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, qty: i.qty + 1 }
              : i
          )
        };
      }
      else {
        return { ...state, items: [...state.items, {...action.payload, qty: 1}] };
      }
    case "REMOVE":
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case "CLEAR":
      return initialState;
    case "INCREMENT":
      return { ...state, items: state.items.map(i =>
        i.id === action.payload
          ? { ...i, qty: i.qty + 1 }
          : i
      )};
    case "DECREMENT":
      const updated = state.items
        .map(i => 
          i.id === action.payload
            ? { ...i, qty: i.qty - 1 }
            : i
        )
        .filter(i => i.qty > 0); // remove if qty becomes 0

      return {
        ...state,
        items: updated
      };
    default:
      return state;
  }
}
