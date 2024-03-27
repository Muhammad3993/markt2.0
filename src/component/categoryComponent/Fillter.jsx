import { useEffect, useState } from "react"
// icons
import { AiOutlineClose } from "react-icons/ai"
import { FaMinus, FaPlus } from "react-icons/fa6"
import { categoriesApi } from "../../data/categoriesApi";
import { brandsApi } from "../../data/brandsApi";

const Fillter = ({setIsOpenFilter, isOpenFilter}) => {
    
    const [fillterCategory, setFillterCategory] = useState();
    const [fillterBrand, setFillterBrand] = useState();
    const [fillterPrice, setFillterPrice] = useState();

    const [cataegoriesResponse, setCataegoriesResponse] = useState(null);
    useEffect(() => {
        const getCategoriesApi = async () => {
            const response = await categoriesApi.getCategoriesApi();
            setCataegoriesResponse(response);
        }

        getCategoriesApi();
    }, []);    
    
    const [brandsResponse, setBrandsResponse] = useState(null);
    useEffect(() => {
        const getCategoriesApi = async () => {
            const response = await brandsApi.getBrandsApi();
            setBrandsResponse(response);
        }

        getCategoriesApi();
    }, []);

  return (
    <div className={isOpenFilter ? 'fillter fillter_open' : 'fillter'}>
        <div className="fillter_main">
            <div>    
                <div className="fillter_main_nav">
                    <p>Filters</p>
                    <button onClick={() => setIsOpenFilter(false)}><AiOutlineClose/></button>
                </div>
                <div className="fillter_main_body">
                    {/* <div className="fillter_main_body_items">
                        <div className="fillter_main_body_item">
                            <p>Household Appliances</p>
                            <span><AiOutlineClose/></span>
                        </div>                        
                        <div className="fillter_main_body_item">
                            <p>Household Appliances</p>
                            <span><AiOutlineClose/></span>
                        </div>       
                        <div className="fillter_main_body_item">
                            <p>Household</p>
                            <span><AiOutlineClose/></span>
                        </div>
                    </div>
                    <p className="fillter_main_body_items_clear">Clear all</p> */}
                    <div className="fillter_main_body_categories">
                        <div className="fillter_main_body_head" onClick={() => {
                            setFillterCategory(!fillterCategory)
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
                                        <input type="checkbox"/>
                                        <span className="fillter_main_body_cats_first_title">{item.title}</span>
                                    </label>                            
                                ))
                            }
                        </div>
                    </div>
                    <div className="fillter_main_body_categories">
                        <div className="fillter_main_body_head" onClick={() => {
                                setFillterBrand(!fillterBrand)
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
                                        <input type="checkbox"/>
                                        <span className="fillter_main_body_cats_first_title">{item.title}</span>
                                    </label>                            
                                ))
                            }
                        </div>
                    </div>     
                    <div className="fillter_main_body_categories">
                        <div className="fillter_main_body_head" onClick={() => {
                                setFillterPrice(!fillterPrice)
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
                <button>First (0)</button>
            </div>
        </div>
        <div className="fillter_overlay" onClick={() => setIsOpenFilter(false)}></div>
    </div>
  )
}

export default Fillter;