
import { useState } from 'react';
// Component
import ProductDetailComponent from '../component/productDetailComponent/ProductDetailComponent';
import NewArrivals from '../component/newArrivals/NewArrivals';

const ProductDetail = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = e => {
    if (isHovered) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = (e.pageX - left) / width * 100;
      const y = (e.pageY - top) / height * 100;
      setPosition({ x, y });
    }
  };

  return (
    <>
      <ProductDetailComponent/>
      <NewArrivals/>
    </>
    // <div className="magnifier-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
    //     <img src={img} alt="Image" className="magnifier-image" style={isHovered ? { position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%',
    //       height: '100%',
    //       transform: `translate(-${position.x}%, -${position.y}%) scale(2)`,
    //       transformOrigin: 'top left',} : {}} 
    //     />
    // </div>
  )
}

export default ProductDetail;