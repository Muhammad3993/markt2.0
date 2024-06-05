import { useEffect, useState } from "react";
// api
import { tagsShowApi } from "../../data/tagsShowApi";
// context
import { useContextProvider } from "../../context/Context";
// img
import img from '../../assets/images/dots3.png';
import img1 from '../../assets/images/dots4.png';
// react-router-dom
import { Link, useParams } from "react-router-dom";
// icons
import { FaRegHeart } from "react-icons/fa";

const TagsShowComponent = () => {
    const { productsColumn, setProductsColumn, favourite, language } = useContextProvider();

    const [tagsShowResponse, setTagsShowResponse] = useState(null);

    const { slug } = useParams();

    useEffect(() => {
        const getTagsShowApi = async () => {
            const response = await tagsShowApi.getTagsShowApi(slug, language);
            setTagsShowResponse(response);
        }

        getTagsShowApi();
    }, [slug, language])
    

  return (
    <div className='cat_component'>
        <div className="container">
            <div className="cat_component_main">
                <div className="cat_component_main_nav">
                    <p className='cat_component_main_nav_title'>{tagsShowResponse ? tagsShowResponse.item.title : "Loading :)"}</p>
                </div>

                <div className="cat_component_main_bottom">
                    <div className="cat_component_main_bottom_left">
                        <button className='cat_component_main_bottom_left_btn'>Sort by</button>
                    </div>
                    <div className="cat_component_main_bottom_right">
                        <div className={!productsColumn ? "cat_component_main_bottom_right_img cat_component_main_bottom_right_img_light" : "cat_component_main_bottom_right_img"} onClick={() => {
                            setProductsColumn(false)
                        }}>
                            <img src={img} alt=""/>
                        </div>           
                        <div className={productsColumn ? "cat_component_main_bottom_right_img cat_component_main_bottom_right_img_light" : "cat_component_main_bottom_right_img"} onClick={() => {
                            setProductsColumn(true)
                        }}>
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                </div>
                
                <div className="cat_component_main_products">
                    {
                        tagsShowResponse && tagsShowResponse.length !== 0 ? tagsShowResponse.products.map(item => (
                            <div className={productsColumn ? "cat_component_main_product" : "column_three"} key={item.id}>
                                <div className="cat_component_main_product_data">
                                    <Link to={`/products/${item.slug}`} className="cat_component_main_product_img">
                                        <img src={item.thumbnail} alt="" />
                                    </Link>
                                    <p className="cat_component_main_product_brand">{item.brand.title}</p>
                                    <Link to={`/products/${item.slug}`} className='cat_component_main_product_title'>{item.title}</Link>
                                    <p className='cat_component_main_product_price'>от {item.price} сум</p>
                                </div>
                                <p className={favourite.some((favItem) => favItem.id === item.id) ? 'cat_component_main_product_heart cat_component_main_product_heart_liked' : 'cat_component_main_product_heart'} onClick={() => handleClick(item)}>{favourite.some((favItem) => favItem.id === item.id) ? <FaHeart/> : <FaRegHeart/>}</p>
                                {
                                    item.tags.map(itemTag => (
                                        <p className='cat_component_main_product_tag' key={itemTag.id}>{itemTag.title === (slug === "30" ? `${slug}%` : slug) ? itemTag.title : ""}</p>
                                    ))
                                }
                                <button className='cat_component_main_product_btn'><span>+</span> <p>Add to cart</p></button>
                            </div>
                            )) : <h1>Free</h1>
                        }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TagsShowComponent;