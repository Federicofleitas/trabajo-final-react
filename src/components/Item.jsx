//DA FORMATO A LOS PRODUCTOS


import { NavLink, Link } from 'react-router-dom'


export const Item = ({ product }) => {
    

    return (
        <div>
            <div class="card d-flex flex-column align-items-center" >
                <img src={product.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">Precio $ {product.price}</p>
                        <NavLink href="#" class="btn btn-secondary" to='/detalle'>Mas información</NavLink>
                    </div>
            </div>
        </div>
    )
}

export default Item;