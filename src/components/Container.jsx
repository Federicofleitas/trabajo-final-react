//Componente contendedor que recibe datos por props y se los va pasando a los hijos

import React from 'react'

const Container = (props) => {
  return (
    <div>
        <Child dat ={props.data} />
    </div>
  )
}

const Child = (props) =>{
    return(
        <ul>
            {props.data.map(item=> (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}



export default Container