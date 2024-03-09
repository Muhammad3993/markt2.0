import { useEffect, useState } from "react"
// import icons
import {AiOutlineClose} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
// import img
import img from '../../assets/images/img.png'
// react-router-dom
import { NavLink } from "react-router-dom"

const NavbarSearch = ({isOpenSearch, setIsOpenSearch}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      let numberOfProducts;

      if (screenWidth >= 868) {
        numberOfProducts = 6
      }else if(screenWidth > 370){
        numberOfProducts = 4
      }else{
        numberOfProducts = 2
      }

      setProducts(data.slice(0, numberOfProducts)); //  
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  

  return (
    <div className={isOpenSearch ? 'nav-search nav-search_show' : 'nav-search'}>
        <div className='nav_search'>
          <div className="nav_search-container">
            <div className="nav_search_searchbox">
              <div className="nav_search_searchbox_input">
                <input type="text" placeholder="Search"/>
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
                {
                  products.map(item => (
                    <div className="nav_search_product" key={item.id}>
                      <div className="nav_search_product_img">
                        <img src={item.img} alt="" />
                      </div>
                      <p className="nav_search_product_tag_name">{item.tag_name}</p>
                      <NavLink to={'/'} className="nav_search_product_title">{item.title}</NavLink>
                      <p className="nav_search_product_price">{item.price}</p>
                    </div>           
                  ))
                }
              </div>
            </div>
          </div>
      </div>
      <div className='nav_search_overlay' onClick={() => setIsOpenSearch(false)}></div>   
    </div>
  )
}

export default NavbarSearch;


const data = [
  {
    id: 1,
    img: img,
    tag_name: 'Apple',
    title: "Watch Series 9",
    price: "от 4 942 000 сум"
  },
  {
    id: 2,
    img: img,
    tag_name: 'Apple',
    title: "Watch Series 9",
    price: "от 4 942 000 сум"
  },
  {
    id: 3,
    img: img,
    tag_name: 'Apple',
    title: "Watch Series 9",
    price: "от 4 942 000 сум"
  },
  {
    id: 4,
    img: img,
    tag_name: 'Apple',
    title: "Watch Series 9",
    price: "от 4 942 000 сум"
  },
  {
    id: 5,
    img: img,
    tag_name: 'Apple',
    title: "Watch Series 9",
    price: "от 4 942 000 сум"
  },
  {
    id: 6,
    img: img,
    tag_name: 'Apple',
    title: "Watch Series 9",
    price: "от 4 942 000 сум"
  },
]