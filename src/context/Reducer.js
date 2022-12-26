export const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "FETCH_ERROR":
      return {
        post: [],
        error: "Something went wrong!",
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
