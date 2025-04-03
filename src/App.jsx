import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ProductContext from './contexts/productContext'
import DefaultLayout from "./layout/DefaultLayout"
import PostsPage from "./pages/PostsPage"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Product from './pages/Product'


export default function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
  }, [])

  return (

    <>
      <ProductContext.Provider value={{ products: products }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/products" Component={PostsPage} />
              <Route path="/products/:id" Component={Product} />
              <Route path="/contacts" Component={Contacts} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  )
}
