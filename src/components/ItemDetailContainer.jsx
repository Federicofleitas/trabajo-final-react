import React, {useEffect, useState } from 'react'
import {useCartContext} from '../context/CartContext'
import { Link, useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { ItemDetail } from './ItemDetail';
import getList from './utils/getProducts';


const ItemDetailContainer = () => {

  const [goToCart, SetGoToCart] = useState(false)
    const {addProduct} = useCartContext()


    const onAdd= (quantity) => {
        SetGoToCart(true)
        addProduct(data, quantity)
    }

    const [data, setData] = useState({});
    const { detalleid } = useParams()

    

    


   useEffect(()=>{
    getList()
    .then((res)=> setData(res.find((item)=> item.id === parseInt(detalleid))))
   },[detalleid])


  return (
    <div><h1>información del modelo elegido</h1>
    <ItemDetail data={data} />
     {
            goToCart
            ? <Link to='/cart'>Terminar compra</Link>
            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
        }
    </div>
  )
}

export default ItemDetailContainer