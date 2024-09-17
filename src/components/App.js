import React from 'react'
import CartProvider from '../CartContext'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Cart from './Cart'
const App = () => {
  return (
    <CartProvider>
        <div id='main'>
            < Navbar />
            <ProductList />
            <Cart />
        </div>
    </CartProvider>
  )
}

export default App

