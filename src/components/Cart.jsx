import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CheckoutForm from './CheckoutForm';



const Cart = () => {
  const {cart, totalPrice} = useCartContext();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

//Creacion de orden de compra en firestore
const [order, setOrder] = useState({
  buyer: {
    firstname: '',
    lastname: '',
    address: '',
    document: '',
    creditcard: '',
    expiration: '',
  },
  items: [],
  total: 0,
});


  const handleClick = (orderData) => {
    
    const db = getFirestore()
    const orderCollection = collection(db, 'orders' )
    const newOrder = {
      ...order,
      buyer: {
        firstname: orderData.firstname,
        lastname: orderData.lastname,
        address: orderData.address,
        document: orderData.document,
        creditcard: orderData.creditcard,
        expiration: orderData.expiration,
      },
      items: cart.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity
      })),
      total: totalPrice(),
    };
    
    addDoc(orderCollection, newOrder)
    .then(({id}) => console.log(id))
    alert("Tu compra ah sido enviada a nuestra base de datos. Muchas gracias.");
    window.location.href = "/";
    setShowCheckoutForm(true)
    
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
      {showCheckoutForm ? (
        <CheckoutForm handleClick={handleClick} />
      ) : (
        <>
          {cart.length === 0 ? (
            <>
              <p>El carrito está vacío</p>
              <Link to='/'>Seguir comprando</Link>
            </>
          ) : (
            <>
              {cart.map(product => <ItemCart key={product.id} product={product} />)}
              <p>Total: {totalPrice()}</p>
              <button onClick={() => setShowCheckoutForm(true)}>Realizar compra</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;