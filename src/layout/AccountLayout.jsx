// import component
import { Outlet } from "react-router-dom"
import AccountHeader from "../component/account/AccountHeader"

const AccountLayout = () => {
  return (
    <>
        <AccountHeader/>
        <Outlet/>
    </>
  )
}

export default AccountLayout