import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import AboutList from './AboutList'
import Cart from './Cart'
import CartProvider from '../context/CartContext'








const App = () => {
  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Listado Vacio' />}/>
              <Route path='/cilindrada/:cilindradaId' element={<ItemListContainer greeting='Listado Vacio' />}/>
              <Route path='/detalle/:detalleid' element={<ItemDetailContainer />}/>
              <Route path='/nosotros' element={<AboutList />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          </CartProvider >
      </BrowserRouter>


    </>
  )
}

export default App