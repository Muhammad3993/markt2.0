import { useContext, useEffect, useRef, useState } from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// css
import './electronics.css'
import { useContextProvider } from '../../context/Context'

const Electronics = () => {
  
  const ref = useRef(null)
  const [startX, setStartX] = useState(0)
  const [startScrollLeft, setStartScrollLeft] = useState(0)
  const [myMouseDown, setMyMouseDown] = useState(false)
  
  const handleDown = (e) => {
    if(!ref.current.contains(e.target)) return;
    setMyMouseDown(true);
    setStartX(e.pageX - ref.current.offsetLeft)
    setStartScrollLeft(ref.current.scrollLeft)
  }

  const handleMove = (e) => {
    e.preventDefault();
    if (!ref.current.contains(e.target)) return;
    const mouseX = e.pageX - ref.current.offsetLeft;
    const moveX = mouseX - startX;
    if(myMouseDown){
      ref.current.scrollLeft = startScrollLeft - moveX
    }
  }
  
  const handleUp = () => {
    setMyMouseDown(false);
  }
  
  useEffect(() => {
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mousemove', handleMove);
    return () => {
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mousemove', handleMove);
    }
  },[handleDown,handleMove]);
  
  const handleScroll = (e) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;
    if (scrollLeft + clientWidth === scrollWidth){}
    if (scrollLeft === 0){}
  }
  


  const {topCategoriesResponse} = useContextProvider()

  return (
    <div className='electronics'>
        <div className="container">
            <div className="electronics_box">
                <p className='electronics_box_title'>Electronics</p>
                <div className="electronics_box_products" onScroll={handleScroll} ref={ref}>
                  {
                    topCategoriesResponse && topCategoriesResponse.data.slice(0, 3).map(item => (
                      <div className="electronics_box_product" key={item.id}>
                        <div className="electronics_box_product_img">
                          <img src={item.image} alt="" />
                        </div>
                        <Link to={`/categories/${item.slug}`} className='electronics_box_product_title'>{item.title}</Link>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Electronics;