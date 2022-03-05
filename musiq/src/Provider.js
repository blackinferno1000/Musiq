import React, { useContext, useState } from "react";
import products from "./products.json";

const ProductContext = React.createContext();
// const FilteredProductContext = React.createContext()
const CartContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}
// export function useFilteredProduct() {
//  return useContext(FilteredProductContext)
// }
export function useCart() {
  return useContext(CartContext);
}

export function Provider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  //   const [stock, setStock] = useState(products);
  // const [FilteredProducts, setFilteredProducts] = useState([])

  let cartObj = {
    get: cartItems,
    set: (items) => {
      setCartItems(items);
    },
  };
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={cartObj}>{children}</CartContext.Provider>
    </ProductContext.Provider>
  );
}
