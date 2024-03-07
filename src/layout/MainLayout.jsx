// import react-router-dom
import { Outlet } from "react-router-dom"
// import components
import Navbar from "../component/navbar/Navbar"
import TopPlague from "../component/topPlague/TopPlague"


const MainLayout = () => {
  return (
    <div>
        <TopPlague/>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        <h1>Footer</h1>
    </div>
  )
}

export default MainLayout