import { useEffect } from 'react';
// react-router-dom
import { useParams } from 'react-router-dom';
// css
import './categoryComponent.css'


// Context
import { useContextProvider } from '../../context/Context'
import Fillter from './Fillter';
import CategoryProducts from './CategoryProducts';
const CategoryComponent = () => {
    const {setCategorySlug, categoryShowResponse} = useContextProvider();

    const { slug } = useParams();

    useEffect(() => {
        setCategorySlug(slug);
    }, [slug, setCategorySlug]);
    
  return (
    <div className='cat_component'>
        <div className="container">
            <Fillter/>
            <div className="cat_component_main">
                <div className="cat_component_main_nav">
                    <p className='cat_component_main_nav_title'>{categoryShowResponse ? categoryShowResponse.item.title : "Loading :)"}</p>
                </div>
                <CategoryProducts/>
            </div>
        </div>
    </div>
  )
}

export default CategoryComponent;