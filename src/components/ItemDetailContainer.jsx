

import React, {useEffect, useState } from 'react'
import {useCartContext} from '../context/CartContext'
import { Link, useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { ItemDetail } from './ItemDetail';
import  products  from '../components/utils/getProducts'

const ItemDetailContainer = ({ product }) => {

  const [goToCart, SetGoToCart] = useState(false)
    const {addProduct} = useCartContext()


    const onAdd= (quantity) => {
        SetGoToCart(true)
        addProduct(product, quantity)
    }

    const [data, setData] = useState({});
    const { detalleid } = useParams

    

    const getData = (id) => {
      return new Promise (resolve => {
        const product = products.find(product => product.id === parseInt(id))
        setTimeout(() => {
        resolve(product);
            }, 2000);



   useEffect(() => {
     first
   
     return () => {
       second
     }
   }, [third])
   


     

      getData.then (res => setData(res.find(product => product.id === parseInt(detalleid))))
    },[])


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