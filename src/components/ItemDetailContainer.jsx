

import React, {useState } from 'react'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = ({ product }) => {

  const [goToCart, SetGoToCart] = useState(false)
    const {addProduct} = useCartContext()


    const onAdd= (quantity) => {
        SetGoToCart(true)
        addProduct(product, quantity)
    }




  return (
    <div><h1>información del modelo elegido</h1>
     {
            goToCart
            ? <Link to='/cart'>Terminar compra</Link>
            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
        }
    </div>
  )
}

export default ItemDetailContainer