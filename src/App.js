import React, { useState } from 'react';
import './App.css';
import Products from './products'
import Cart from './cart'


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
 

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(item => product.name === item.name);
    if (itemInCart){
      itemInCart.quantity++;
    }else{
      itemInCart={ 
        ...product,
        quantity: 1,
      }
      newCart.push(itemInCart);
    };
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    )
  };

  const navigateTo = (PAGE_CART) =>{
    setPage(PAGE_CART);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, {quantity}) => sum + quantity, 0);
  };

  const setQuantity = (product, amount) => {
    const newCart= [...cart];
    newCart.find(item => item.name === product.name).quantity = amount;
    setCart(newCart);
}
  
  return (
    <div className="App">
       <header>
      <h1>React Shop</h1>
    <div className="nav">
    <button className="btn btn-cart" onClick={()=> navigateTo(PAGE_CART) }>Go to Cart ({getCartTotal()}) </button>
    <button className="btn btn-cart" onClick={()=> navigateTo(PAGE_PRODUCTS) }> View Products</button>
    </div>
  </header>
  {page === PAGE_PRODUCTS && (<Products addToCart={addToCart}/>)}  
  {page === PAGE_CART && (
  <Cart 
  cart={cart} 
  removeFromCart={removeFromCart} 
  setQuantity={setQuantity} 
  />
  )}
  </div>  
  );
  }

export default App;
