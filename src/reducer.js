import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log("You decreased the amount");
  }
  if (action.type === INCREASE) {
    console.log("You increased the amount");
  }
  if (action.type === REMOVE) {
    console.log("You removed the item ", action.payload.id);
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  return state;
};

export default reducer;
