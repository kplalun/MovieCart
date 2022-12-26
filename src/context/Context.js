import React, {  createContext, useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";
import { cartReducer } from "./Reducer";

export const Cart = createContext();

const Context = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products : [],
    cart: [],
  });

  console.log(state)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=141ab9b7e901d2e365d8991a8e934719&query=a&`
      )
      .then((response) => {
        dispatch({ type: "LOAD_DATA", payload: response.data.results.map(item => ({...item, price: 500}))})
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR",payload: error });
      });
  }, []);

  console.log(state);
  

  return (
    <Cart.Provider value={{ state, dispatch }}>{props.children}</Cart.Provider>
  );
};
export const CartState = () => React.useContext(Cart);
export default Context;
