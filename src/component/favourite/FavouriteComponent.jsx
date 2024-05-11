// context
import { useContextProvider } from "../../context/Context";
// img
import img from '../../assets/images/dots3.png';
import img1 from '../../assets/images/dots4.png';
// routerdom
import { Link } from "react-router-dom";
// react icons
import { FaRegHeart } from "react-icons/fa";

const FavouriteComponent = () => {
    const {productsColumn, setProductsColumn, favourite} = useContextProvider();

    const reverseFavourite = favourite.map((item, index, array) => array[array.length - index - 1])

  return (
    <div className='favourite'>
        <div className="container">
            <div className="favourite_main">
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
                        favourite.length !== 0 ? reverseFavourite.map(item => (
                            <div className={productsColumn ? "cat_component_main_product" : "column_three"} key={item.id}>
                                <div className="cat_component_main_product_data">
                                    <div className="cat_component_main_product_img">
                                        <img src={item.thumbnail} alt="" />
                                    </div>
                                    <p className="cat_component_main_product_brand">{item.brand.title}</p>
                                    <Link to={`/products/${item.slug}`} className='cat_component_main_product_title'>{item.title}</Link>
                                    <p className='cat_component_main_product_price'>от {item.price} сум</p>
                                </div>
                                <p className='cat_component_main_product_heart'><FaRegHeart/></p>
                                {
                                    item.tags.slice(0, 1).map(itemTag => (
                                        <p className='cat_component_main_product_tag' key={itemTag.id}>{itemTag.title}</p>
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

export default FavouriteComponent