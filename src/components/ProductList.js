import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const ProductList = () => {
    const { cart, dispatch } = useContext(CartContext)

    const products = [
        { id: 1, name: 'Product 1', price: 50 },
        { id: 2, name: 'Product 2', price: 100 },
        { id: 3, name: 'Product 3', price: 150 },
      ];
      
      const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', product });
      };

  return (
     <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button id={`increment-btn-${product.id}`} onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList