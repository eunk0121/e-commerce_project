import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const Cart = ({ children }) => {
  const getInitialCart = () => JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initalCart = getInitialCart();
    if (initalCart) {
      setCart(initalCart);
    }
  }, []);

  useEffect(() => {
    //write to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    // if (cart) {
    //   localStorage.setItem('cart', JSON.stringify(cart));
    // }
  }, [cart]);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };
  const addItemToCart = (product, qty = 1) => {
    const item = cart.find((i) => i.id === product.id);
    console.log(cart);
    if (item) {
      //increase qty
      item.qty += qty;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, qty }]);
    }
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const exposed = {
    cart,
    addItemToCart,
    removeItemFromCart,
    openCart,
    closeCart,
    isOpen,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default Cart;
