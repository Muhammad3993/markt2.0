// css
import "./account.css"
// react-router-dom
import { NavLink } from 'react-router-dom'

const AccountHeader = () => {
  return (
    <div className='accountheader'>
        <div className="container">
            <div className="accountheader_main">
                <div className="accountheader_main_title">
                    <p>Welcom Back, Muhammad</p>
                </div>
                <div className="accountheader_main_links">
                    <NavLink to={"account"} className='accountheader_main_link'>Account</NavLink>
                    <NavLink to={"/order"} className='accountheader_main_link'>Orders</NavLink>
                    <NavLink to={"/about"} className='accountheader_main_link'>About Us</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountHeader