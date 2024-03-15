// css
import './footer.css';
// react-router-dom
import { NavLink } from "react-router-dom";
// img
import img from '../../assets/images/logo1.png';
import img1 from '../../assets/images/logoType1.webp';
// icons
import { RiTelegramFill, RiInstagramFill } from 'react-icons/ri'
// data
import { footerApi } from "../../data/footerApi.js";
import { useEffect, useState } from 'react';

const Footer = () => {

    const [footerResponse, setFooterResponse] = useState(null)

    useEffect(() => {
        const getFooter = async () => {
            const response = await footerApi.getFooter()
            setFooterResponse(response)
        }

        getFooter();
    }, [])
  return (
    <footer>
        <div className="container">
            <div className="footer">
                <div className="footer_main">
                    <NavLink to={'/'} className="footer_main_logo">
                        <img src={img} alt="" />
                    </NavLink>
                    <div className="footer_main_col">
                        <div className="footer_main_col_links">
                            {
                                footerResponse && footerResponse.line_1.map(item => (
                                    <NavLink to={item.slug} className="footer_main_col_link" key={item.id}>{item.title}</NavLink>
                                ))
                            }
                        </div>                    
                        <div className="footer_main_col_links">
                            {
                                footerResponse && footerResponse.line_2.map(item => (
                                    <NavLink to={item.slug} className="footer_main_col_link" key={item.id}>{item.title}</NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p className='footer_bottom_copy'>© 2024 Markt store</p>
                    <NavLink to={'/'} className='footer_bottom_img'>
                        <img src={img1} alt="" />
                    </NavLink>
                    <div className='footer_bottom_icons'>
                        <a href="https://t.me/dayless_nights" className="footer_bottom_icon"><RiTelegramFill /></a>
                        <a href="https://www.instagram.com/" className="footer_bottom_icon"><RiInstagramFill /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;