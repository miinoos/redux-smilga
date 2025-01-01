import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
//store.getState();
import reducer from "./reducer";

//React-Redux setup
import { Provider } from "react-redux";

//initial store
const initialStore = {
  cart: cartItems, //list of values in cart
  total: 105,
  amount: 5, //total number of iteams
};

//reduccer

const store = createStore(reducer, initialStore); //for creating a store we need to pass a function which will be a reducer and the initial store which is the inital state
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
