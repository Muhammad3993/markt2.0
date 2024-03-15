// import react-router-dom
import { Outlet } from "react-router-dom"
// import components
import Navbar from "../component/navbar/Navbar"
import TopPlague from "../component/topPlague/TopPlague"
import Footer from "../component/footer/Footer"


const MainLayout = () => {
  return (
    <div>
        <TopPlague/>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout