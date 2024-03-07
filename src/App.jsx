// import react-router-dom
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
// import pages
import Home from "./pages/Home"
// Layouts
import MainLayout from "./layout/MainLayout"

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<Home/>}/>
        <Route path="/electronics" element={<Home/>}/>
        <Route path="/appliances" element={<Home/>}/>
        <Route path="/accessories" element={<Home/>}/>
        <Route path="/sale" element={<Home/>}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
