import React from 'react'

export default function Cart({cart, removeFromCart, setQuantity}) {
    
    const getTotalSum = () => {
        return cart.reduce((sum, {cost, quantity }) => sum + cost*quantity, 0);
    };
    return(
        <>
        <h1> Cart </h1>
        <div>Total Cost:${getTotalSum()}  </div>
        <div className="products">
          {cart.map((product, idx) => (
            
        <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}RON</h4>
            <input value={product.quantity} onChange={(e)=> 
            setQuantity(product, e.target.value)} />
            <img src={product.image} alt={product.name} />
            <button className='btn' onClick={() => removeFromCart(product)}>Remove</button>
          </div>
          ))}
          </div>  
          </>
    );
}