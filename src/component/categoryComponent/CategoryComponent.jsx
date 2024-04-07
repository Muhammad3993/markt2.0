import { useEffect } from 'react';
// react-router-dom
import { Link, useParams } from 'react-router-dom';
// css
import './categoryComponent.css'
// img
import img from '../../assets/images/dots3.png';
import img1 from '../../assets/images/dots4.png';
// icons
import { FaPlus, FaRegHeart } from 'react-icons/fa';
// Context
import { useContextProvider } from '../../context/Context'
import Fillter from './Fillter';
import { AiOutlineClose } from 'react-icons/ai';
const CategoryComponent = () => {
    const {setCategorySlug, categoryShowResponse, productsResponse, currentPage, setCurrentPage, pages, productsColumn, setProductsColumn, setIsOpenFilter, selectData} = useContextProvider();

    const { slug } = useParams();

    useEffect(() => {
        setCategorySlug(slug);
    }, [slug, setCategorySlug]);

    // const handleClear = () => {
    //     selectData.categories = [];
    // }
    
  return (
    <div className='cat_component'>
        <div className="container">
            <Fillter/>
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
                    {
                        selectData && selectData.categories.length || selectData && selectData.tags.length || selectData && selectData.brands.length != '' ?
                        <div className="filter_bottom_el">
                            <button className='filter_bottom_el_btn'>Filters <span><FaPlus/></span></button>
                            <div className="filter_bottom_items">
                                {
                                    selectData && selectData.categories.map(cat => (
                                        <div className="filter_bottom_item" key={cat.id}>
                                            <p className='filter_bottom_item_title'>{cat.title}</p>
                                            <span className='filter_bottom_item_close'><AiOutlineClose/></span>
                                        </div>
                                    ))
                                }
                                {
                                    selectData && selectData.tags.map(tag => (
                                        <div className="filter_bottom_item" key={tag.id}>
                                            <p className='filter_bottom_item_title'>{tag.title}</p>
                                            <span className='filter_bottom_item_close'><AiOutlineClose/></span>
                                        </div>
                                    ))
                                }
                                {
                                    selectData && selectData.brands.map(brand => (
                                        <div className="filter_bottom_item" key={brand.id}>
                                            <p className='filter_bottom_item_title'>{brand.title}</p>
                                            <span className='filter_bottom_item_close'><AiOutlineClose/></span>
                                        </div>
                                    ))
                                }
                                <p className="filter_bottom_el_clear">Clear All</p>
                            </div>
                        </div> : ''
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
                        <p className='cat_component_main_products_pagination_count'>{productsResponse && productsResponse.meta.to} of {productsResponse && productsResponse.meta.total} products</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryComponent;