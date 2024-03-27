import { useEffect, useState } from "react"
// import react-router-dom
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from "react-router-dom"
// import pages
import Home from "./pages/Home"
import CategoryShow from "./pages/CategoryShow"
import ProductDetail from "./pages/ProductDetail.jsx"
// Layouts
import MainLayout from "./layout/MainLayout"
import Products from "./pages/Products"
// context
import { ContextProvider } from "./context/Context"


function App() {


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:slug" element={<ProductDetail/>}/>
        <Route path="/categories/:slug" element={<CategoryShow/>}/>
        {/* <Route path="/electronics" element={<Home/>}/>
        <Route path="/appliances" element={<Home/>}/>
        <Route path="/accessories" element={<Home/>}/>
        <Route path="/sale" element={<Home/>}/> */}
      </Route>
    )
  )

  return (
    <ContextProvider>
      <RouterProvider router={routes}/>
    </ContextProvider>
  )
}

export default App
