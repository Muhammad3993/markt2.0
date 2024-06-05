import { useEffect, useState } from "react"
// import react-router-dom
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from "react-router-dom"
// import pages
import Home from "./pages/Home"
import CategoryShow from "./pages/CategoryShow"
import ProductDetail from "./pages/ProductDetail.jsx"
import Cart from "./pages/Cart.jsx"
import SearchResult from "./pages/SearchResult.jsx"
import Products from "./pages/Products"
import Account from "./pages/Account.jsx"
import Order from "./pages/Order.jsx"
import About from "./pages/About.jsx"
import Favourite from "./pages/Favourite.jsx"
import TagsShow from "./pages/TagsShow.jsx"
// Layouts
import MainLayout from "./layout/MainLayout"
import AccountLayout from "./layout/AccountLayout.jsx"
// context
import { ContextProvider } from "./context/Context"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="products/:slug" element={<ProductDetail/>}/>
        <Route path="categories/:slug" element={<CategoryShow/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="search" element={<SearchResult/>} />
        <Route path="favorite" element={<Favourite/>} />
        <Route path="tags/:slug" element={<TagsShow/>} />
        <Route element={<AccountLayout/>}>
          <Route path="/account" element={<Account/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
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
