import React, { useState } from 'react';

export default function Products({addToCart}) {
    const [products] = useState([
        {
          name: 'Casti',
          cost: '29.99 RON',
          image: 'https://lcdn.altex.ro/resize/media/catalog/product/c/a/2bd48d28d1c32adea0e55139a4e6434a/casmdrrf895rk-10.jpg'
        },
        {
          name: 'Tastatura',
          cost: '39.99 RON',
          image: 'https://lcdn.altex.ro/media/catalog/product/T/a/Tastatura_gaming_mecanica_Marvo_KG959G_Poza_01_896079fb.jpg'
        },
        {
          name: 'Mouse',
          cost: '19.99 RON',
          image: 'https://lcdn.altex.ro/resize/media/catalog/product/M/o/2bd48d28d1c32adea0e55139a4e6434a/Mouse_gaming_Razer_Mamba_Wireless_Photo_01_a5ff55d2.jpg'
        }
      ]);
    return(
        <>
    <h1>Produse</h1>
      <div className="products">
      {products.map((product, idx) => (

      <div className="product" key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt={product.name} />
        <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
      ))}
      </div>  
      </>
    );

}