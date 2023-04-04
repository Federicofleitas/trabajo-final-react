import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

//Creacion de orden de compra en firestore
  const order = {
    buyer: {
      name:'Federico',
      email:'emaildeprueba@hotmail.com',
      phone:'1144335533',
      address:'Direccion de prueba 64553'
    },
    items:cart.map(product => ({ id:product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total:totalPrice(),
  }


  const handleClick = () => {
    
    const db = getFirestore()
    const orderCollection = collection(db, 'orders' )
    addDoc(orderCollection, order)
    .then(({id}) => console.log(id))
    alert("Tu compra ah sido enviada a nuestra base de datos. Muchas gracias.")
    
    }



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
      <p>
        Total: {totalPrice()}
      </p>
      <button onClick={handleClick}>Realizar compra</button>
    </div>
    
  )
}

export default Cart