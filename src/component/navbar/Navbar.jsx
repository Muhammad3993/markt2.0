import { Fragment, useContext, useEffect, useState } from "react";
// import react-router-dom
import { Link, NavLink } from "react-router-dom";
// import icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiUser3Line, RiTelegramFill, RiInstagramFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io"
import { LuLogOut } from "react-icons/lu"
// import css
import './navbar.css'
// import img
import logo from '../../assets/images/logo.png';
import img from '../../assets/images/img.png';
import image from '../../assets/images/RUS.jpeg'
import img1 from '../../assets/images/USA.png'
import img2 from '../../assets/images/UZB.jpeg'
// Cmponent
import NavbarSearch from "./NavbarSearch";
import { headerApi } from "../../data/headerApi";
import Sign from "../sign/Sign";
import { useContextProvider } from "../../context/Context";
import { headerItem } from "../../data/headerItemApi";
import { HiArrowLongLeft } from "react-icons/hi2";

const Navbar = () => {

  const {favourite, addToFavourite, language} = useContextProvider();

  const handleClick = (item) => {
    addToFavourite(item);
};

  const [headerResponse, setHeaderResponse] = useState(null)
  const [headerItemResponse, setHeaderItemResponse] = useState(null)
  const [sidebar, setSidebar] = useState(false)
  const [isOpenBar, setIsOpenBar] = useState();
  const [navMenu, setNavMenu] = useState(false)
  const [isOpenSign, setIsOpenSign] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const [headerSlug, setHeaderSlug] = useState("");
  const handleIsOpenBar = () => {
    setIsOpenBar(!isOpenBar)
  };
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState('русский');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const languages = [
    {
      id: 1,
      img: img2, 
      name: 'uzbek' 
    },
    {
      id: 2, 
      img: img1, 
      name: 'english' 
    },
    {
      id: 3, 
      img: image, 
      name: 'русский' 
    }
  ];

  const [user, setUser] = useState(false)
  useEffect(() => {
    const getHeader = async () => {
      const response = await headerApi.getHeader(language);
      setHeaderResponse(response);
    }
    
    getHeader();
  }, [language])

  useEffect(() => {
    const getHeaderItem = async () => {
      const response = await headerItem.getHeaderItem(headerSlug, language);
      setHeaderItemResponse(response)
    }
    if(headerSlug){
      getHeaderItem();
    }
  }, [headerSlug, language]);

  const [positionTop, setPositionTop] = useState(false) 
  const changePosition = () => {
      if(window.scrollY >= 30){
        setPositionTop(true)
      }else{
        setPositionTop(false)
      }
  }
  window.addEventListener("scroll", changePosition)


  return (
    <>
      <NavbarSearch isOpenSearch={isOpenSearch} setIsOpenSearch={setIsOpenSearch} positionTop={positionTop}/>
      {/* <pre>{JSON.stringify(headerItemResponse, null, 2)}</pre> */}
      <nav className={positionTop ? "positionTopNav" : ""}>

        <div className="container">
          <div className="navbar">
            <div className="navbar_left-block">
              {
                !isOpenBar ?
                <button className="nav_bar" onClick={() => {
                  setIsOpenBar(true)
                  setNavMenu(true)
                }}><AiOutlineMenu/></button> :
                <button className="nav_bar" onClick={() => setIsOpenBar(false)}><AiOutlineClose/></button>
              }
              <>
                    {
                      headerResponse && headerResponse.map((item, i) => (
                        item.type === "categories" ?
                        <div className={"nav_link"} key={i} onClick={
                          () => {
                            setHeaderSlug(item.slug)
                            setIsOpenBar(true)
                            setNavMenu(false)
                          }
                        }>{item.title}</div> : 
                        <Link to={`${item.type}/${item.slug}`} className={"nav_link"} key={i}>{item.title}</Link>
                      ))
                    }
                    <div className={!isOpenBar ? `nav_menu nav_menu_none ${positionTop ? 'nav__menu' : ''}` : 'nav_menu'}>
                      <div className='navbar_menu'>
                        <div className="container">
                          <div className="navbar_menu_box">
                            {
                              !navMenu ? 
                              (
                                headerItemResponse && Number(headerItemResponse.length) !== 0 ?
                                <div className="navbar_menu_box_sidebar">
                                  {
                                      <Link to={`categories/${headerSlug}`} className={"navbar_menu_box_sidebar_bigtitle"}>All {headerItemResponse && headerItemResponse.title}</Link>
                                  }
                                  {
                                    headerItemResponse && headerItemResponse.children.map(item => (
                                      <Link to={`${item.type}/${item.slug}`} key={item.id} className={"navbar_menu_box_sidebar_title catalog_active" && "navbar_menu_box_sidebar_title"}>{item.title}</Link>
                                    ))
                                  }
                                </div> : ''
                               ) : 
                               <div className="navbar_menu_box_sidebar">
                                 <p className="navbar_menu_box_sidebar_bigtitle catalog_active">Menu</p>
                               </div>
                            }
                            {
                              !navMenu ? 
                              (
                                headerItemResponse && headerItemResponse.products.length !== 0 ?
                                <div className='navbar_menu_box_body'>
                                  <div className="navbar_menu_box_body_products">
                                    {
                                      headerItemResponse && headerItemResponse.products.map(item => (
                                        <div className="navbar_menu_box_body_product" key={item.id}>
                                          <Link to={`/products/${item.slug}`} className="navbar_menu_box_body_product_img">
                                              <img src={item.thumbnail} alt="" />
                                          </Link>
                                          <p className='navbar_menu_box_body_product_brand'>{item.brand.title}</p>
                                          <Link to={`/products/${item.slug}`} className='navbar_menu_box_body_product_title'>{item.title}</Link>
                                          <p className='navbar_menu_box_body_product_price'>от {item.price} сум</p>
                                          {
                                            item.tags.slice(0, 1).map(itemTag => (
                                                <p className='welcomeModal_box_product_tag' key={itemTag.id}>{itemTag.title}</p>
                                            ))
                                          }
                                          <p className={favourite.some((favItem) => favItem.id === item.id) ? 'welcomeModal_box_product_heart welcomeModal_box_product_heart_liked' : 'welcomeModal_box_product_heart'} onClick={() => handleClick(item)}>{favourite.some((favItem) => favItem.id === item.id) ? <FaHeart/> : <FaRegHeart/>}</p>
                                        </div>
                                      ))
                                    }         
                                  </div>
                                </div> : ''
                               ) : 
                               <div className="navbar_menu_box_body">
                                <NavLink  to={'/about'} className="navbar_menu_box_body_link">About us</NavLink>
                                <NavLink  to={'/account'} className="navbar_menu_box_body_link">Account</NavLink>
                                <NavLink  to={'/order'} className="navbar_menu_box_body_link">Orders</NavLink>
                                <NavLink  to={'/'} className="navbar_menu_box_body_link">Privacy Policy</NavLink>
                                <NavLink  to={'/'} className="navbar_menu_box_body_link">Terms & Conditions</NavLink>
                               </div>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="nav_overlay" onClick={handleIsOpenBar}></div>
                    </div>
              </>
            </div>
            <div className="navbar_center-block">
              <button className="navbar_bar" onClick={() => setSidebar(true)}><AiOutlineMenu/></button>
              <NavLink to={'/'} className="navbar_logo">
                <img src={logo} alt="" />
              </NavLink>
              <div className={sidebar ? "side_bar side_bar_show" : "side_bar"}>
                <div className="side_bar_box">
                  <div className="side_bar_box_nav container">
                    <div className="side_bar_box_left_logo-block">
                      <button className="sidebar_close_btn" onClick={() => setSidebar(false)}><AiOutlineClose/></button>
                      <NavLink to={'/'} className="navbar_logo">
                        <img src={logo} alt="" />
                      </NavLink>
                    </div>
                    <div className="side_bar_box_nav_right-block">
                      <p className="topPlague_current">USD</p>
                      <div className="topPlague_languages" onClick={handleSelectToggle}>
                        <div className="topPlague_language">
                          <div className="topPlague_language_img">
                            <img src={languages.find(lang => lang.name === selectedLanguage).img} alt="" />
                          </div>
                          <p data-text={selectedLanguage}>{selectedLanguage.slice(0, 2) === 'uz' ? 'uz' : selectedLanguage.slice(0, 2) === 'en' ? 'en' : 'ру'}</p>
                        </div>
                        {
                          isOpen &&
                          (
                            <div className="topPlague_languages_box">
                              {
                                languages.map(lang => (
                                  selectedLanguage !== lang.name && (
                                    <div key={lang.id} className="topPlague_language" onClick={() => handleLanguageSelect(lang.name)}>
                                      <div className="topPlague_language_img">
                                        <img src={lang.img} alt="" />
                                      </div>
                                      <p>{lang.name.slice(0, 2)}</p>
                                  </div>
                                  )
                                ))
                              }
                          </div>)
                        }
                      </div>
                      {
                        !user ? 
                        <div className="side_bar_login">login</div> : 
                        <NavLink to={'/user'} className="navbar_link side_bar_link"><RiUser3Line/></NavLink>
                      }
                    </div>
                  </div>
                  <div className="side_bar_box_catalog container">
                    {
                      headerResponse && headerResponse.map((item, i) => (
                        item.type === "categories" ?
                        <div key={i} className="side_bar_box_link" 
                          onClick={() => {
                            setHeaderSlug(item.slug)
                            setIsOpenSidebar(true)
                          }}
                        ><span>{item.title}</span><p><IoIosArrowForward/></p></div> : 
                        <NavLink to={`${item.type}/${item.slug}`} key={i} className="side_bar_box_link"><span>{item.title}</span></NavLink>
                      ))
                    }
                  </div>
                  <div className={`side_bar_box_header ${isOpenSidebar ? "side_bar_box_header_open" : ""} container`}>
                    <div className="side_bar_box_header_nav">
                      <div className="side_bar_box_header_nav_left">
                        <button className="side_bar_box_header_nav_left_arrow" onClick={() => setIsOpenSidebar(false)}><HiArrowLongLeft/></button>
                        <p className="side_bar_box_header_nav_left_title">{headerItemResponse && headerItemResponse.title}</p>
                      </div>
                      <Link to={`categories/${headerSlug}`} className="side_bar_box_header_nav_link">Shop All</Link>
                    </div>
                    <div className="side_bar_box_header_body">
                      {
                        headerItemResponse && headerItemResponse.children.map(item => (
                          <Link to={`${item.type}/${item.slug}`} className="side_bar_box_header_body_link" key={item.id}>{item.title}</Link>
                        ))
                      }
                      {/* <Link className="side_bar_box_header_body_link">Computers</Link> */}
                    </div>
                  </div>
                  <div className="side_bar_box_pages container">
                    <NavLink to={'/about'} className="side_bar_box_link"><span>About</span></NavLink>
                    <NavLink to={'/account'} className="side_bar_box_link"><span>Account</span></NavLink>
                    <NavLink to={'/order'} className="side_bar_box_link"><span>Orders</span></NavLink>
                    <NavLink to={'/about'} className="side_bar_box_link"><span>Privacy Policy</span></NavLink>
                    <NavLink to={'/about'} className="side_bar_box_link"><span>Terms & Conditions</span></NavLink>
                    <div className="side_bar_box_logout"><p>Log out</p><span><LuLogOut /></span></div>
                  </div>
                  <div className="side_bar_box_icons container">
                    <a href="https://t.me/dayless_nights" className="side_bar_box_icon"><RiTelegramFill /></a>
                    <a href="https://www.instagram.com/" className="side_bar_box_icon"><RiInstagramFill /></a>
                  </div>
                </div>
                <div className="side_bar_overlay" onClick={() => setSidebar(false)}></div>
              </div>
            </div>
            <div className="navbar_right-block">
              <Link to={"/search"} className="navbar_search" onClick={() => setIsOpenSearch(true)}><span><FiSearch/></span><p>search</p></Link>
              <NavLink to={'/cart'} className="navbar_link"><CgShoppingBag/><span>100</span></NavLink>
              <NavLink to={'/favorite'} className="navbar_link navbar_link_heart"><FaRegHeart/><span>{Number(favourite.length)}</span></NavLink>
              {
                !user ? 
                <div className="side_bar_login" onClick={() => setIsOpenSign(true)}>login</div> : 
                <NavLink to={'/account'} className="navbar_link side_bar_link"><RiUser3Line/></NavLink>
              }
            </div>
          </div>
        </div>
      </nav>
      <div className="free_nav"></div>
      <Sign isOpenSign={isOpenSign} setIsOpenSign={setIsOpenSign} />
    </>
  )
}

export default Navbar;

const data = [
  {
    id: 1,
    name: '',
    path: '/',
    title: [
      {
        id: 1,
        name: 'Menu',
        pages: [
  
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'new',
    path: '/new',
    title: [
      {
        id: 1,
        name: 'New',
        pages: [
          {
            id: 1,
            name: 'About',
          },
          {
            id: 2,
            name: 'Account',
          },
          {
            id: 3,
            name: 'Orders',
          },
          {
            id: 4,
            name: 'Privacy Policy',
          },
          {
            id: 5,
            name: 'Terms & Conditions',
          },
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'electronics',
    path: '/electronics',
    icon: <IoIosArrowForward/>,
    title: [
      {
        id: 1,
        name: 'All electronics',
        pages: [
          {
            id: 1,
            tag: 'new',
            what_item: 'apple',
            name: 'Watch Series 9',
            price: 'от 4 942 000 сум',
            img: img,
          },
          {
            id: 2,
            tag: 'new',
            what_item: 'apple',
            name: 'Watch Series 9',
            price: 'от 4 942 000 сум',
            img: img,
          },          
          {
            id: 3,
            tag: 'new',
            what_item: 'apple',
            name: 'Watch Series 9',
            price: 'от 4 942 000 сум',
            img: img,
          },          {
            id: 4,
            tag: 'new',
            what_item: 'apple',
            name: 'Watch Series 9',
            price: 'от 4 942 000 сум',
            img: img,
          },          {
            id: 5,
            tag: 'new',
            what_item: 'apple',
            name: 'Watch Series 9',
            price: 'от 4 942 000 сум',
            img: img,
          },
        ]
      }
    ]
  },  
  {
    id: 4,
    name: 'appliances',
    path: '/appliances',
    icon: <IoIosArrowForward/>,
    title: [
      {
        id: 1,
        name: 'Menu',
        pages: [
          {
            id: 1,
            name: 'About',
          },
          {
            id: 2,
            name: 'Account',
          },
          {
            id: 3,
            name: 'Orders',
          },
          {
            id: 4,
            name: 'Privacy Policy',
          },
          {
            id: 5,
            name: 'Terms & Conditions',
          },
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'accessories',
    path: '/accessories',
    icon: <IoIosArrowForward/>,
    title: [
      {
        id: 1,
        name: 'Menu',
        pages: [
          {
            id: 1,
            name: 'About',
          },
          {
            id: 2,
            name: 'Account',
          },
          {
            id: 3,
            name: 'Orders',
          },
          {
            id: 4,
            name: 'Privacy Policy',
          },
          {
            id: 5,
            name: 'Terms & Conditions',
          },
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'sale*',
    path: '/sale',
    title: []
  },
]