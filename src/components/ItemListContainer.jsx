import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import ItemList from './ItemList';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ItemListContainer = ({ greeting }) => {

    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false)
    const {cilindradaId} = useParams()


    useEffect(() => {
        setLoading(true)
        const coleccionProductos= cilindradaId? query(collection(db, "products"), where("cilindrada", "==", cilindradaId)) : collection(db, "products")
        getDocs(coleccionProductos)
        .then((result)=> {
          const lista = result.docs.map((producto)=>{
            return{
              id:producto.id,
              ...producto.data()
            }
          })
          setArrayList(lista)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [cilindradaId]);



    return (
        <div>
            {/* Si esta cargando que me muestre el mensaje cargando y sino que me muestre la lista*/}
            {loading ? <Loader /> : <ItemList products={arrayList} />}

        </div>
    )
}


export default ItemListContainer