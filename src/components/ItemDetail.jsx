import React from 'react'

export const ItemDetail = (product) => {
  return (
   <>
        <h2>Modelo: ${product.title}</h2>
        <h3>Precio actual: ${product.price}</h3>
        <h4>${product.description}</h4>
   </>
  )
}
