import React, { useState } from 'react';
import './App.css';
import Products from './products'

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS); 
 

  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    )
  }

  const navigateTo = (PAGE_CART) =>{
    setPage(PAGE_CART);
  };

  const renderCart = () => (
    <div>
    <h1> Cart </h1>
    <div className="products">
      {cart.map((product, idx) => (
        
    <div className="product" key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt={product.name} />
        <button className='btn' onClick={() => removeFromCart(product)}>Remove</button>
      </div>
      ))}
      </div>  
      </div>
  )
  
  return (
    <div className="App">
       <header>
      <h1>React Shop</h1>
    <div className="nav">
    <button className="btn btn-cart" onClick={()=> navigateTo(PAGE_CART) }>Go to Cart ({cart.length}) </button>
    <button className="btn btn-cart" onClick={()=> navigateTo(PAGE_PRODUCTS) }> View Products</button>
    </div>
  </header>
  {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>}  
  {page === PAGE_CART && renderCart()}  
      </div>
  );



}

export default App;
