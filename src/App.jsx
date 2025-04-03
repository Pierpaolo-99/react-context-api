import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAlertContext } from "./contexts/AlertContext"

import ProductContext from './contexts/productContext'
import DefaultLayout from "./layout/DefaultLayout"
import ProductsPage from "./pages/ProductsPage"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Product from './pages/Product'


export default function App() {

  const [products, setProducts] = useState([])

  const { setAlertData } = useAlertContext();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
      .catch(err => {
        setAlertData({
          type: 'error',
          message: 'Si è verificato un errore durante il caricamento dei dati. Riprova più tardi.'
        })
      })
  }, [])

  return (

    <>
      <ProductContext.Provider value={{ products: products }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/products" Component={ProductsPage} />
              <Route path="/products/:id" Component={Product} />
              <Route path="/contacts" Component={Contacts} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  )
}
