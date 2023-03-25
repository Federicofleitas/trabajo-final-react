import React from 'react'

export const ItemDetail = ({data}) => {
  return (
   <>
        <h2>Modelo: {data.title}</h2>
        <h3>Precio actual: ${data.price}</h3>
        <h4>{data.description}</h4>
   </>
  )
}