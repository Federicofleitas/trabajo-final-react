//DA FORMATO A LOS PRODUCTOS

import ItemCount from './ItemCount';
import React, {useState,useContext} from 'react'
import {useCartContext} from '../context/CartContext'
import { NavLink, Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

export const Item = ({ product }) => {
    
    const nombre = useContext(useCartContext)

    const [goToCart, SetGoToCart] = useState(false)
    const [addProduct] = useCartContext()


    const onAdd= (quantity) => {
        SetGoToCart(true)
        addProduct(product, quantity)
    }


    return (
        <div>
            <div class="card d-flex flex-column align-items-center" >
                <img src={product.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">Precio $ {product.price}</p>
                        <NavLink href="#" class="btn btn-secondary" to='/detalle'>Mas información</NavLink>
                        <br />
                        {
                            goToCart
                            ? <Link to='/cart'>Terminar compra</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                        }
                    </div>
            </div>
        </div>
    )
}

export default Item;