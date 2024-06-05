import { useContext, useEffect, useState } from 'react';
// swiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// react-router-dom
import { Link } from 'react-router-dom'
// css
import './welcomeModal.css'

// icons
import { AiOutlineClose } from "react-icons/ai";
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { randomProductApi } from '../../data/randomProductApi';
import { useContextProvider } from '../../context/Context';
// Context

const WelcomeModal = () => {

    const [openModal, setOpenModal] = useState(true)
    const [randomProductResponse, setRandomProductResponse] = useState(null);

    const {favourite, addToFavourite, language} = useContextProvider();

    const handleClick = (item) => {
        addToFavourite(item);
    };

    useEffect(() => {
        const getRandomProductApi = async () => {
            const response = await randomProductApi.getRandomProductApi(language)
            setRandomProductResponse(response)
        }
  
        getRandomProductApi();
    }, [language]);
  return (
    <div className={!openModal ? 'welcomeModal welcomeModal_close' : 'welcomeModal'}>
        <div className="welcomeModal_box">
            <button className='welcomeModal_box_close' onClick={() => setOpenModal(false)} ><AiOutlineClose/></button>
            <p className='welcomeModal_box_title'>Welcome</p>
            <p className='welcomeModal_box_l-title'>New items that appeared in the catalog</p>
            <div className="welcomeModal_box_products">
                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    allowTouchMove={false}
                    breakpoints={{
                    489: {
                        slidesPerView: 2,
                    },
                    657: {
                        slidesPerView: 3,
                    },
                    868: {
                        slidesPerView: 4,
                    }
                    }}
                    modules={[ Navigation ]}
                    className="mySwiper welcomeModal_box_products_swiper"
                >
                    {
                        randomProductResponse && randomProductResponse.data.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="welcomeModal_box_product">
                                    <Link to={`/products/${item.slug}`} className="welcomeModal_box_product_img">
                                        <img src={item.thumbnail} alt="" />
                                    </Link>
                                    <p className='welcomeModal_box_product_brand'>{item.brand.title}</p>
                                    <Link to={`/products/${item.slug}`} className='welcomeModal_box_product_title'>{item.title}</Link>
                                    <p className='welcomeModal_box_product_price'>от {item.price} сум</p>
                                    {
                                        item.tags.slice(0, 1).map(itemTag => (
                                            <p className='welcomeModal_box_product_tag' key={itemTag.id}>{itemTag.title}</p>
                                        ))
                                    }
                                    <p className={favourite.some((favItem) => favItem.id === item.id) ? 'welcomeModal_box_product_heart welcomeModal_box_product_heart_liked' : 'welcomeModal_box_product_heart'} onClick={() => handleClick(item)}>{favourite.some((favItem) => favItem.id === item.id) ? <FaHeart/> : <FaRegHeart/>}</p>
                                </div>
                            </SwiperSlide>           
                        ))
                    }
                </Swiper>
            </div>
            <Link to={'/'} className='welcomeModal_box_link'>View All</Link>
        </div>  
        <div className="welcomeModal_overlay" onClick={() => setOpenModal(false)}></div> 
    </div>
  )
}

export default WelcomeModal