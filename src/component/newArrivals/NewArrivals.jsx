import { useEffect, useState } from 'react';
// react-router-dom
import { Link } from 'react-router-dom'
// css
import './newArrivals.css'
// icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
// data
import { randomProductApi } from '../../data/randomProductApi';
import { InView } from 'react-intersection-observer';
import { useContextProvider } from '../../context/Context';
// React Observer


const NewArrivals = () => {
    const { addToFavourite, isFavourite,favourite } = useContextProvider();

    const handleClick = (item) => {
        addToFavourite(item);
    };

    const [isLoading, setLoading] = useState(true)
    const [randomProductResponse, setRandomProductResponse] = useState(null);

    const getRandomProductApi = async () => {
        const response = await randomProductApi.getRandomProductApi()
        setRandomProductResponse(response)
        setLoading(false)
    }
    
  return (
    <div className='newArrivals'>
        <div className="container">
            <div className="newArrivals_box">
                <div className="newArrivals_box_nav">
                    <p className="electronics_box_title">New arrivals</p>
                    <Link to={'/'} className='newArrivals_box_nav_link'>Show all</Link>
                </div>
                <InView
                    triggerOnce
                    onChange={(inView) =>{
                      if(inView){
                        getRandomProductApi();
                      }
                    }}
                >
                    <div className="newArrivals_box_products">
                        {
                            isLoading ? "Loading.." :
                            randomProductResponse && randomProductResponse.data.slice(0, 4).map(item => (
                                <div className="newArrivals_box_product" key={item.id}>
                                    <div className="newArrivals_box_product_data">
                                        <div className="newArrivals_box_product_img">
                                            <img src={item.thumbnail} alt="" />
                                        </div>
                                        <p className="newArrivals_box_product_brand">{item.brand.title}</p>
                                        <Link to={`/products/${item.slug}`} className='newArrivals_box_product_txt_title'>{item.title}</Link>
                                        <p className='newArrivals_box_product_txt_price'>от {item.price} сум</p>
                                    </div>
                                    <p className='newArrivals_box_product_heart' onClick={() => handleClick(item)}>{!isFavourite ? <FaRegHeart/> : <FaHeart/>}</p>
                                    {
                                        item.tags.slice(0, 1).map(itemTag => (
                                            <p className='newArrivals_box_product_tag' key={itemTag.id}>{itemTag.title}</p>
                                        ))
                                    }
                                    <button className='newArrivals_box_product_btn'><span>+</span> <p>Add to cart</p></button>
                                </div>
                            ))
                        }
                    </div>
                </InView>
            </div>
        </div>
    </div>
  )
}

export default NewArrivals