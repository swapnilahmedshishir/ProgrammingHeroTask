import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { toast } from "react-toastify";

// creata the context
export const AppContext = createContext();

// create a provider component

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeTab, setActiveTab] = useState("cart");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast("Wow Add to product Cart!");
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    toast("Wow Add to product wishlist!");
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        activeTab,
        setActiveTab,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Define prop types for AppProvider
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
