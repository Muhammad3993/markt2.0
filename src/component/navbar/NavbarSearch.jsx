// import icons
import {AiOutlineClose} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
// import img
import img from '../../assets/images/img.png'
import { NavLink } from "react-router-dom"

const NavbarSearch = ({isOpenSearch, setIsOpenSearch}) => {
  return (
    <div className={isOpenSearch ? 'nav-search nav-search_show' : 'nav-search'}>
        <div className='nav_search'>
          <div className="nav_search-container">
            <div className="nav_search_searchbox">
              <div className="nav_search_searchbox_input">
                <input type="text" />
              </div>
              <button className="nav_search_searchbox_btn" onClick={() => setIsOpenSearch(false)}><AiOutlineClose/></button>
            </div>
            <div className="nav_search_popular">
              <p className="nav_search_popular_title">Popular searchings</p>
              <div className="nav_search_popular_boxes">
                <div className="nav_search_popular_box">
                  <p className="nav_search_popular_box_title">IPhone 15</p>
                </div>                
                <div className="nav_search_popular_box">
                  <p className="nav_search_popular_box_title">Watch Series 9</p>
                </div>                
                <div className="nav_search_popular_box">
                  <p className="nav_search_popular_box_title">Watch Series 9</p>
                </div>                
                <div className="nav_search_popular_box">
                  <p className="nav_search_popular_box_title">Watch Series 9</p>
                </div>                
                <div className="nav_search_popular_box">
                  <p className="nav_search_popular_box_title">Watch Series 9</p>
                </div>                
                <div className="nav_search_popular_box">
                  <p className="nav_search_popular_box_title">Watch Series 9</p>
                </div>                
                <div className="nav_search_popular_box">
                  <p className="nav_search_popular_box_title">Watch Series 9</p>
                </div>            
              </div>
            </div>
            <div className="nav_search_popular">
              <p className="nav_search_popular_title">Recently searched</p>
              <div className="nav_search_popular_boxes">
                <div className="nav_search_popular_box">
                  <span><FiSearch/></span>
                  <p className="nav_search_popular_box_title">IPhone 15</p>
                </div>                
                <div className="nav_search_popular_box">
                  <span><FiSearch/></span>
                  <p className="nav_search_popular_box_title">Watch Series 9</p>
                </div>                        
              </div>
            </div>
            <div className="nav_search_freq-products nav_search_popular">
              <p className="nav_search_popular_title">Frequent products</p>
              <div className="nav_search_products">
                <div className="nav_search_product">
                  <div className="nav_search_product_img">
                    <img src={img} alt="" />
                  </div>
                  <p className="nav_search_product_tag_name">Apple</p>
                  <NavLink to={'/'} className="nav_search_product_title">Watch Series 9</NavLink>
                  <p className="nav_search_product_price">от 4 942 000 сум</p>
                </div>                
                <div className="nav_search_product">
                  <div className="nav_search_product_img">
                    <img src={img} alt="" />
                  </div>
                  <p className="nav_search_product_tag_name">Apple</p>
                  <NavLink to={'/'} className="nav_search_product_title">Watch Series 9</NavLink>
                  <p className="nav_search_product_price">от 4 942 000 сум</p>
                </div>                
                <div className="nav_search_product">
                  <div className="nav_search_product_img">
                    <img src={img} alt="" />
                  </div>
                  <p className="nav_search_product_tag_name">Apple</p>
                  <NavLink to={'/'} className="nav_search_product_title">Watch Series 9</NavLink>
                  <p className="nav_search_product_price">от 4 942 000 сум</p>
                </div>                
                <div className="nav_search_product">
                  <div className="nav_search_product_img">
                    <img src={img} alt="" />
                  </div>
                  <NavLink to={'/'} className="nav_search_product_tag_name">Apple</NavLink>
                  <p className="nav_search_product_title">Watch Series 9</p>
                  <p className="nav_search_product_price">от 4 942 000 сум</p>
                </div>                
                <div className="nav_search_product">
                  <div className="nav_search_product_img">
                    <img src={img} alt="" />
                  </div>
                  <NavLink to={'/'} className="nav_search_product_tag_name">Apple</NavLink>
                  <p className="nav_search_product_title">Watch Series 9</p>
                  <p className="nav_search_product_price">от 4 942 000 сум</p>
                </div>          
                <div className="nav_search_product">
                  <div className="nav_search_product_img">
                    <img src={img} alt="" />
                  </div>
                  <NavLink to={'/'} className="nav_search_product_tag_name">Apple</NavLink>
                  <p className="nav_search_product_title">Watch Series 9</p>
                  <p className="nav_search_product_price">от 4 942 000 сум</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='nav_search_overlay' onClick={() => setIsOpenSearch(false)}></div>   
    </div>
  )
}

export default NavbarSearch;