import { Fragment, useState } from "react";
// import react-router-dom
import { NavLink } from "react-router-dom";
// import icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io"
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

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [isOpenBar, setIsOpenBar] = useState();
  const handleIsOpenBar = () => {
    setIsOpenBar(!isOpenBar)
  };
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [selectCatalog, setSelectCatalog] = useState(1)
  const [selectCatalog1, setSelectCatalog1] = useState(1)

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

  const user = true;

  return (
    <>
      <NavbarSearch isOpenSearch={isOpenSearch} setIsOpenSearch={setIsOpenSearch}/>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="navbar_left-block">
              {
                !isOpenBar ?
                <button className="nav_bar" onClick={() => {
                  setIsOpenBar(true)
                  setSelectCatalog(1)
                }}><AiOutlineMenu/></button> :
                <button className="nav_bar" onClick={() => setIsOpenBar(false)}><AiOutlineClose/></button>
              }
              <>
                    {
                      data && data.map(item => (
                        <NavLink to={item.path}  className={selectCatalog ? "nav_link nav_link_active" : "nav_link"} key={item.id} onClick={
                          () => {
                            setSelectCatalog(item.id)
                            setSelectCatalog1(1);
                            setIsOpenBar(true)
                          }
                        }>{item.name}</NavLink>
                      ))
                    }
                    <div className={!isOpenBar ? 'nav_menu nav_menu_none' : 'nav_menu'}>
                      <div className='navbar_menu'>
                        <div className="container">
                          <div className="navbar_menu_box">
                            <div className="navbar_menu_box_sidebar">
                              {
                                selectCatalog !== null ? data[selectCatalog - 1]?.title.map(item => (
                                  <div key={item.id} className={selectCatalog ? "navbar_menu_box_sidebar_title catalog_active" : "navbar_menu_box_sidebar_title"} onClick={() => {
                                    setSelectCatalog1(item.id)
                                  }}>{item.name}</div>
                                )) : ''
                              }
                            </div>
                            <div className='navbar_menu_box_body'>
                              {
                                selectCatalog1 !== null ? data[selectCatalog - 1]?.title[selectCatalog1 - 1]?.pages.map(item => (
                                  <NavLink  to={'/'} key={item.id} className="navbar_menu_box_body_link">{item.name}</NavLink>
                                )) : '' 
                              }
                            </div>
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
                      data.slice(1).map(item => (
                        <NavLink key={item.id} className="side_bar_box_link"><span>{item.name}</span><p>{item.icon}</p></NavLink>
                      ))
                    }
                  </div>
                  <div className="side_bar_box_pages container">
                    {
                      data && data.slice(0, 1).map(item => (
                        <Fragment key={item.id}>
                          {
                            item.title && item.title.slice(0, 1).map(titleItem => (
                              <Fragment key={titleItem.id}>
                                {
                                  titleItem.pages && titleItem.pages.map(pageItem => (
                                    <NavLink key={pageItem.id} to={pageItem.path} className="side_bar_box_link"><span>{pageItem.name}</span></NavLink>
                                  ))
                                }
                              </Fragment>
                            ))
                          }
                        </Fragment>
                      ))
                    }
                  </div>
                  </div>
                <div className="side_bar_overlay" onClick={() => setSidebar(false)}></div>
              </div>
            </div>
            <div className="navbar_right-block">
              <button className="navbar_search" onClick={() => setIsOpenSearch(true)}><span><FiSearch/></span><p>search</p></button>
              <NavLink to={'/cart'} className="navbar_link"><CgShoppingBag/><span>100</span></NavLink>
              <NavLink to={'/heart'} className="navbar_link navbar_link_heart"><FaRegHeart/><span>0</span></NavLink>
              <NavLink to={'/user'} className="navbar_link navbar_link_user"><RiUser3Line/></NavLink>
            </div>
          </div>
        </div>
    </nav>
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