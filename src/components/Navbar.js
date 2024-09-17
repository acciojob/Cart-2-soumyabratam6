import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const Navbar = () => {
    const{cart} = useContext(CartContext);
    const totalItems = cart.reduce((total, item)=>total+item.quantity, 0);

  return (
    <nav>
        <h2>Shopping Cart</h2>
        <div id="nav-cart-item-count">Cart: {totalItems} items</div>
    </nav>
  )
}

export default Navbar