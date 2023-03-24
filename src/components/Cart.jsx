import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
    return (
      <>
            <p>El carrito esta vacio</p>
            <Link to='/'>Seguir comprando</Link>
      </>
    );
  }


  return (
    <div>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Cart