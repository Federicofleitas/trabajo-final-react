//cONTIENE LOS PRODUCTOS
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import { useEffect } from 'react';

/*
const products = [
    {
        id:1,
        title:"Honda CB 250",
        price:1618800,
        description:"La moto mas vendida del pais es traida por Honda",
        cilindrada:"250cc",
        image:"Catalogo/hondacb250.jpg"
    },
    {
        id:2,
        title:"Yamaha Fazer 250",
        price:1870200,
        description:"La motocicleta mas veloz en su categoria llega a nuestro pais",
        cilindrada:"250cc",
        image:"Catalogo/yamahafazer250.jpg"
    },
    {
        id:3,
        title:"Bajaj Dominar 250",
        price:12339900,
        description:"Bajaj presenta su modelo urbano de la categoria dominar",
        cilindrada:"250cc",
        image:"Catalogo/bajajdominar250.jpg"
    },
    {
        id:4,
        title:"Benelli TNT 300",
        price:2120000,
        description:"Benelli sorprende con esta nueva unidad capaz de romper todos los esquemas",
        cilindrada:"300cc",
        image:"Catalogo/benellitnt300.jpg"
    },
    {
        id:5,
        title:"KTM Duke 250",
        price:1543330,
        description:"La marca americana vuelve a innovar con este nuevo ejemplar",
        cilindrada:"250cc",
        image:"Catalogo/ktmduke300.jpg"
    },
    {
        id:6,
        title:"Susuki Gixxer 250",
        price:1990500,
        description:"Susuki vuelve a presentar este nuevo modelo despues de varios años de ausencias en nuestro pais",
        cilindrada:"250cc",
        image:"Catalogo/susukigixxer250.jpg"
    }
]

const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}
*/
/*
const getList = () =>{
useEffect (() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', '1akydDdBfuFmw8KbWpas' )
    getDoc (queryDoc)
    .then(getList)
}, [])
}
*/

// export default getList;