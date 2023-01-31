import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("ECart")
  // if(localCartData === []){
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }

  const parsedData = JSON.parse(localCartData);
  if(!Array.isArray(parsedData)) return [];

  return parsedData;
}

const initialState = {
  //cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 500,
}

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({type: "ADD_TO_CART", payload:{id, color, amount, product}});
  }

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id});
  }

  const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
  }

  const setDecrease = (id) => {
    dispatch({type: "SET_DECREASE", payload: id});
  }

  const setIncrease = (id) => {
    dispatch({type: "SET_INCREASE", payload: id});
  }

  //to add the data in local storage
  // get or set

  useEffect(() => {
    // dispatch({type: "CART_TOTAL_ITEM"});
    // dispatch({type: "CART_TOTAL_PRICE"});
    dispatch({ type: "CART_ITEM_PRICE_TOTAL"})
    localStorage.setItem("ECart", JSON.stringify(state.cart));
  }, [state.cart])
  

  return (<CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrease}}>
    {children}
  </CartContext.Provider>)
}

const useCartContext = () => {
  return useContext(CartContext);
}

export { CartProvider, useCartContext };