import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import ItemList from './ItemList';
import Loader from './Loader';
import getList from './utils/getProducts';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false)
    const {cilindradaId} = useParams()


    useEffect(() => {
        setLoading(true)
        getList()
            .then((res) => {
                if (cilindradaId) {
                    setArrayList(res.filter((item) => item.cilindrada === cilindradaId));
                } else {
                    setArrayList(res);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [cilindradaId]);



    return (
        <div>
            {/* Si esta cargando que me muestre el mensaje cargando y sino que me muestre la lista*/}
            {loading ? <Loader /> : <ItemList products={arrayList} />}

        </div>
    )
}


export default ItemListContainer