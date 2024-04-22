import './searchResult.css'
// icons
import {AiOutlineClose} from "react-icons/ai"
// component
import CategoryProducts from '../categoryComponent/CategoryProducts'

const SearchResultComponent = () => {
  return (
    <div className='searchresult'>
        <div className="container">
          <div className="searchresult_main">
            <div className="searchresult_main_header">
              <p className='searchresult_main_header_title'>29 results found for ‘Iphone’</p>
              <div className="searchresult_main_header_input">
                <input type="text" placeholder='Search' />
                <span><AiOutlineClose/></span>
              </div>
            </div>
            <CategoryProducts/>
          </div>
        </div>
    </div>
  )
}

export default SearchResultComponent