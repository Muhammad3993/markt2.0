import { useContext, useEffect, useState } from 'react';
// react-router-dom
import { Link, useParams } from 'react-router-dom';
// css
import './categoryComponent.css'
// img
import img from '../../assets/images/dots3.png';
import img1 from '../../assets/images/dots4.png';
// icons
import { FaRegHeart } from 'react-icons/fa';
// data
import { categoryShowApi } from '../../data/categoryShowApi';
// Context
import { useContextProvider } from '../../context/Context'
import { productsApi } from '../../data/productsApi';
import Fillter from './Fillter';
const CategoryComponent = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const [categoryShowResponse, setCategoryShowResponse] = useState(null)
    const [productsResponse, setProductsResponse] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    
    // const [productsPerPage, setProductsPerPage] = useState(16);
    const [productsColumn, setProductsColumn] = useState(true);
    
    let { slug } = useParams();
    
    // const categoryId = categoryShowResponse ? categoryShowResponse.categories.map((category) => category.id) : 0;
    
    const pages = new Array(productsResponse && productsResponse.meta.last_page).fill(null);
    
    const [categoryId, setCategoryId] = useState(null);
    
    useEffect(() => {
        const getCategoryShowApi = async () => {
            const response = await categoryShowApi.getCategoryShowApi(slug)
            setCategoryShowResponse(response)
            if (response && response.categories && response.categories.length > 0) {
                const catId = response.item.id;
                console.log(catId);
                setCategoryId(catId);
            }
        }
        
        getCategoryShowApi()
    }, [slug]);
    
    
    useEffect(() => {
        const getProductsApi = async () => {
            if(categoryId){
                const response = await productsApi.getProductsApi(currentPage, categoryId)
                setProductsResponse(response)
            }
        }
        
        getProductsApi()
    }, [currentPage, categoryId]);
    
    console.log(categoryId);

  return (
    <div className='cat_component'>
        <div className="container">
            <Fillter setIsOpenFilter={setIsOpenFilter} isOpenFilter={isOpenFilter}/>
            <div className="cat_component_main">
                <div className="cat_component_main_nav">
                    <p className='cat_component_main_nav_title'>{categoryShowResponse ? categoryShowResponse.item.title : "Loading :)"}</p>
                    <div className="cat_component_main_bottom">
                        <div className="cat_component_main_bottom_left">
                            <button className='cat_component_main_bottom_left_btn'>Sort by</button>
                            <button className='cat_component_main_bottom_left_btn' onClick={() => setIsOpenFilter(true)}>Filters</button>
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
                </div>
                <div className="cat_component_main_products">
                    {
                        productsResponse && productsResponse.data.map(item => (
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
                        ))
                    }
                    <div className='cat_component_main_products_pagination'>
                        <div className="cat_component_main_products_pagination_page">
                            {
                                productsResponse && productsResponse.meta && (
                                    <div className="pagination">                                 
                                    {
                                        pages.map((page, index) => (
                                            <div key={index} className={currentPage === (index + 1) ? 'cat_component_main_products_pagination_page_btn cat_component_main_products_pagination_page_btn_active' : 'cat_component_main_products_pagination_page_btn'} onClick={() => setCurrentPage(index + 1)}>
                                                {index + 1}
                                            </div>
                                        ))
                                    }
                                    </div>
                                )
                            }
                        </div>
                        <p className='cat_component_main_products_pagination_count'>0 of {productsResponse && productsResponse.data.length} products</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryComponent;