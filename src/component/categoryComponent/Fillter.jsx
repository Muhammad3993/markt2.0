import { useEffect, useState } from "react"
// icons
import { AiOutlineClose } from "react-icons/ai"
import { FaMinus, FaPlus } from "react-icons/fa6"

// Context
import { useContextProvider } from '../../context/Context'
const Fillter = () => {
    const { setCategoryId, setTagId, setBrandId, isOpenFilter, setIsOpenFilter, cataegoriesResponse, tagsResponse, brandsResponse, setSelectData} = useContextProvider()
    // for open
    const [fillterCategory, setFillterCategory] = useState();
    const [fillterTag, setFillterTag] = useState();
    const [fillterBrand, setFillterBrand] = useState();
    const [fillterPrice, setFillterPrice] = useState();
    // for open
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    // const [selectData, setSelectData] = useState(null);


    
    const handleCategoryChange = (item, isChecked) => {
        if (isChecked) {
            setSelectedCategories([...selectedCategories, item]);
        } else if (!isChecked){
            setSelectedCategories(selectedCategories.filter(category => category.id !== item.id));
        }
    };

    const handleTagChange = (item, isChecked) => {
        if (isChecked) {
            setSelectedTags([...selectedTags, item]);
        } else if (!isChecked){
            setSelectedTags(selectedTags.filter(tag => tag.id !== item.id));
        }
    };

    const handleBrandChange = (item, isChecked) => {
        if (isChecked) {
            setSelectedBrands([...selectedBrands, item]);
        } else if (!isChecked){
            setSelectedBrands(selectedBrands.filter(brand => brand.id !== item.id));
        }
    };

    const categoryIds = selectedCategories.map(category => category.id);
    const tagIds = selectedTags.map(tag => tag.id);
    const brandIds = selectedBrands.map(brand => brand.id);

    const handleAply = () => {
        setCategoryId(categoryIds);
        setTagId(tagIds);
        setBrandId(brandIds);

        const SelectData = {
            categories: selectedCategories,
            tags: selectedTags,
            brands: selectedBrands
        };

        setSelectData(SelectData)
    }



  return (
    <div className={isOpenFilter ? 'fillter fillter_open' : 'fillter'}>
        <div className="fillter_main">
            <div>    
                <div className="fillter_main_nav">
                    <p>Filters</p>
                    <button onClick={() => setIsOpenFilter(false)}><AiOutlineClose/></button>
                </div>
                <div className="fillter_main_body">
                    {
                        Number(selectedCategories.length + selectedTags.length + selectedBrands.length) > 0 ?
                        <>
                            <div className="fillter_main_body_items">
                                {
                                    selectedCategories.map(category => (
                                        <div className="fillter_main_body_item" key={category.id}>
                                            <p>{category.title}</p>
                                            <span><AiOutlineClose/></span>
                                        </div>                 
                                    ))
                                }
                                {
                                    selectedTags.map(tag => (
                                        <div className="fillter_main_body_item" key={tag.id}>
                                            <p>{tag.title}</p>
                                            <span><AiOutlineClose/></span>
                                        </div>                 
                                    ))
                                }
                                {
                                    selectedBrands.map(brand => (
                                        <div className="fillter_main_body_item" key={brand.id}>
                                            <p>{brand.title}</p>
                                            <span><AiOutlineClose/></span>
                                        </div>                 
                                    ))
                                }

                            </div>
                            <p className="fillter_main_body_items_clear">Clear all</p>
                        </> : ''
                    }
                    <div className="fillter_main_body_categories">
                        <div className="fillter_main_body_head" onClick={() => {
                            setFillterCategory(!fillterCategory)
                                setFillterTag(false)
                                setFillterBrand(false)
                                setFillterPrice(false)
                            }}>
                            <p>Category</p>
                            {
                                fillterCategory ? 
                                <p><FaMinus /></p>:
                                <p><FaPlus /></p> 
                            }
                        </div>
                        <div className={fillterCategory ? `fillter_main_body_cats ${cataegoriesResponse && cataegoriesResponse.data.length !== 18 ? "fillter_main_body_cats_disable filter_height" : "fillter_main_body_cats_disable"}` : "fillter_main_body_cats"}>
                            {
                                cataegoriesResponse && cataegoriesResponse.data.map(item => (
                                    <label className="fillter_main_body_cats_first" key={item.id}>
                                        <input type="checkbox" onChange={(e) => handleCategoryChange(item, e.target.checked)}/>
                                        <span className="fillter_main_body_cats_first_title">{item.title}</span>
                                    </label>                            
                                ))
                            }
                        </div>
                    </div>
                    <div className="fillter_main_body_categories">
                        <div className="fillter_main_body_head" onClick={() => {
                                setFillterTag(!fillterTag)
                                setFillterBrand(false)
                                setFillterCategory(false)
                                setFillterPrice(false)
                            }}>
                            <p>Tag</p>
                            {
                                fillterTag ? 
                                <p><FaMinus /></p>:
                                <p><FaPlus /></p>
                            }
                        </div>
                        <div className={fillterTag ? `fillter_main_body_cats ${tagsResponse && tagsResponse.data.length !== 15 ? "fillter_main_body_cats_disable filter_height" : "fillter_main_body_cats_disable"}` : "fillter_main_body_cats"}>
                            {
                                tagsResponse && tagsResponse.data.map(item => (
                                    <label className="fillter_main_body_cats_first" key={item.id}>
                                        <input type="checkbox" onChange={(e) => handleTagChange(item, e.target.checked)}/>
                                        <span className="fillter_main_body_cats_first_title">{item.title}</span>
                                    </label>                            
                                ))
                            }
                        </div>
                    </div>   
                    <div className="fillter_main_body_categories">
                        <div className="fillter_main_body_head" onClick={() => {
                                setFillterBrand(!fillterBrand)
                                setFillterTag(false)
                                setFillterCategory(false)
                                setFillterPrice(false)
                            }}>
                            <p>Brand</p>
                            {
                                fillterBrand ? 
                                <p><FaMinus /></p>:
                                <p><FaPlus /></p>
                            }
                        </div>
                        <div className={fillterBrand ? `fillter_main_body_cats ${brandsResponse && brandsResponse.data.length !== 18 ? "fillter_main_body_cats_disable filter_height" : "fillter_main_body_cats_disable"}` : "fillter_main_body_cats"}>
                            {
                                brandsResponse && brandsResponse.data.map(item => (
                                    <label className="fillter_main_body_cats_first" key={item.id}>
                                        <input type="checkbox" onChange={(e) => handleBrandChange(item, e.target.checked)}/>
                                        <span className="fillter_main_body_cats_first_title">{item.title}</span>
                                    </label>                            
                                ))
                            }
                        </div>
                    </div>
                    <div className="fillter_main_body_categories">
                        <div className="fillter_main_body_head" onClick={() => {
                                setFillterPrice(!fillterPrice)
                                setFillterTag(false)
                                setFillterBrand(false)
                                setFillterCategory(false)
                            }}>
                            <p>Price</p>
                            {
                                fillterPrice ? 
                                <p><FaMinus /></p>:
                                <p><FaPlus /></p>
                            }
                        </div>
                        <div className={fillterPrice ? "fillter_main_body_cats fillter_main_body_cats_disable" : "fillter_main_body_cats"}>
                            <div className="filter_currency">
                                <p className="filter_currency_title">Currency</p>
                                <div className="filter_currency_inputs">
                                    <input type="text" placeholder="From"/>
                                    <input type="text" placeholder="To"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fillter_main_foot">
                <button onClick={handleAply}>Appy ({selectedCategories + selectedTags + selectedBrands ? selectedCategories.length + selectedTags.length + selectedBrands.length : 0})</button>
            </div>
        </div>
        <div className="fillter_overlay" onClick={() => setIsOpenFilter(false)}></div>
    </div>
  )
}

export default Fillter;