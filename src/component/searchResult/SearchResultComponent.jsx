import { useEffect, useState } from 'react';
// css
import './searchResult.css'
// img
import img from '../../assets/images/dots3.png';
import img1 from '../../assets/images/dots4.png';
// icons
import {AiOutlineClose} from "react-icons/ai"
// component
import { searchApi } from '../../data/searchApi';
import { useContextProvider } from '../../context/Context';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { debounce } from 'lodash';

const SearchResultComponent = () => {
  const {productsResponse, currentPage, pages, productsColumn, setProductsColumn, setIsOpenFilter, selectData, handleClear, handlePagination, favourite, addToFavourite, inputRef, searchItem, setSearchItem, handleChangeSearchInput, language} = useContextProvider();

  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const getSearch = debounce(async () => {
        const response = await searchApi.getSearchApi(searchItem, language);
        setSearchResult(response);
    }, 2000);

    getSearch();

    return () => {
        getSearch.cancel();
    };
}, [searchItem, language]);

  const handleClearSearchInput = () => {
    setSearchItem('')
    if (inputRef.current.value) {
        inputRef.current.value = ""
    }
  }

  return (
    <div className='searchresult'>
        <div className="container">
          <div className="searchresult_main">
            <div className="searchresult_main_header">
              <p className='searchresult_main_header_title'>{searchResult && searchResult.count !== '' ? searchResult.count : 0} results found for ‘{searchItem}’</p>
              <div className="searchresult_main_header_input">
                <input type="text" placeholder='Search' onChange={handleChangeSearchInput} ref={inputRef} value={searchItem}/>
                {
                    searchItem !== '' ? 
                    <span onClick={handleClearSearchInput}><AiOutlineClose/></span> : ''
                }
              </div>
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
                        searchResult && searchResult.length !== 0 ? searchResult.data.map((item, i) => (
                            <div className={productsColumn ? "cat_component_main_product" : "column_three"} key={i}>
                                <div className="cat_component_main_product_data">
                                    <Link to={`/products/${item.slug}`} className="cat_component_main_product_img">
                                        <img src={item.thumbnail} alt="" />
                                    </Link>
                                    <p className="cat_component_main_product_brand">{item.brand.title}</p>
                                    <Link to={`/products/${item.slug}`} className='cat_component_main_product_title'>{item.title}</Link>
                                    <p className='cat_component_main_product_price'>от {item.price} сум</p>
                                </div>
                                <p className={favourite.some((favItem) => favItem.id === item.id) ? 'cat_component_main_product_heart cat_component_main_product_heart_liked' : 'cat_component_main_product_heart'} onClick={() => handleClick(item)}>{favourite.some((favItem) => favItem.id === item.id) ? <FaHeart/> : <FaRegHeart/>}</p>
                                {/* {
                                    item.tags.slice(0, 1).map(itemTag => (
                                        <p className='cat_component_main_product_tag' key={itemTag.id}>{itemTag.title}</p>
                                    ))
                                } */}
                                <button className='cat_component_main_product_btn'><span>+</span> <p>Add to cart</p></button>
                            </div>
                        )) : <h1>No products</h1>
                    }
                </div>
          </div>
        </div>
    </div>
  )
}

export default SearchResultComponent