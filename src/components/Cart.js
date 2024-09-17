import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const Cart = () => {
    const {cart,dispatch} = useContext(CartContext)

    const increaseQuantity = (id) => {
        dispatch({ type: 'INCREASE_QUANTITY', id });
      };
      const decreaseQuantity = (id) => {
        dispatch({ type: 'DECREASE_QUANTITY', id });
      };
    
      const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', id });
      };
    
      const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
      };
      const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
      if (cart.length === 0) {
        return <p>Cart is currently empty</p>
      }
  return (
    <div>
      <h1>Cart</h1>
      <ul id="cart-items-list">
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button id={`decrement-btn-${item.id}`} onClick={() => decreaseQuantity(item.id)}>-</button>
            <button id={`increment-btn-${item.id}`} onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button id="clear-all-cart" onClick={clearCart}>Clear Cart</button>
      <h2 id="cart-total-amount">Total Amount: ${totalAmount}</h2>
    </div>
  )
}

export default Cart