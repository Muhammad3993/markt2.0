import { useContext, useEffect, useState } from 'react';
// react-router-dom
import { Link } from 'react-router-dom'
// css
import './newArrivals.css'

// icons
import { FaRegHeart } from "react-icons/fa";
// Context
import { useContextProvider } from '../../context/Context'

const NewArrivals = () => {
    const {randomProductResponse} = useContextProvider();
  return (
    <div className='newArrivals'>
        <div className="container">
            <div className="newArrivals_box">
                <div className="newArrivals_box_nav">
                    <p className="electronics_box_title">New arrivals</p>
                    <Link to={'/'} className='newArrivals_box_nav_link'>Show all</Link>
                </div>
                <div className="newArrivals_box_products">
                    {
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
                                <p className='newArrivals_box_product_heart'><FaRegHeart/></p>
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
            </div>
        </div>
    </div>
  )
}

export default NewArrivals