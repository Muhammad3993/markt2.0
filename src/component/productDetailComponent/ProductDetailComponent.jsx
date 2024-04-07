// css
import { useEffect, useState } from 'react'
import './productDetailComponent.css'
// data
import { productDetailApi } from '../../data/productDetailApi'
import { useParams } from 'react-router-dom';
// icons
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ProductDetail = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  // const [isHovered, setIsHovered] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const handleMouseMove = e => {
  //   if (isHovered) {
  //     const { left, top, width, height } = e.target.getBoundingClientRect();
  //     const x = (e.pageX - left) / width * 100;
  //     const y = (e.pageY - top) / height * 100;
  //     setPosition({ x, y });
  //   }
  // };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [positions, setPositions] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseMove = (e, index) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    setPositions({ ...positions, [index]: { x, y } });
  };

  const [productDetailResponse, setproductDetailResponse] = useState(null);
  const [isOpenDesc, setIsOpenDesc] = useState();

  const {slug} = useParams();

  useEffect(() => {
    const getProductDetailApi = async () => {
      const response = await productDetailApi.getProductDetailApi(slug);
      setproductDetailResponse(response)
    }
    getProductDetailApi();
  }, [slug])

  return (
    <div className='detail'>
      <div className="container">
        <div className="detail_main">
            <div className="detail_main_left">
              <div className="detail_main_left_images">
                {
                  productDetailResponse && productDetailResponse.data.images.map((img, index) => (
                    <div className={productDetailResponse.data.images.length === 1 ? "detail_main_left_img full-width" : productDetailResponse.data.images.length === 3 ? index === 2 ? "detail_main_left_img full-width" : "detail_main_left_img" : "detail_main_left_img"} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onMouseMove={(e) => handleMouseMove(e, index)} key={index}>
                      <img src={img} alt="" style={hoveredIndex === index ? { 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transform: `translate(-${positions[index]?.x ?? 0}%, -${positions[index]?.y ?? 0}%) scale(2)`,
                        transformOrigin: 'top left'
                      } : {}}/>
                    </div>
                  ))
                }
              </div>
              {
                productDetailResponse && productDetailResponse.data.description.length > 0 ?
                <div className="detail_main_left_desc">
                  <p className='detail_main_left_desc_title'>Description</p>
                  <p className={isOpenDesc ? 'detail_main_left_desc_body detail_main_left_desc_body_open' : 'detail_main_left_desc_body'}>{productDetailResponse && productDetailResponse.data.description}</p>
                  {
                    productDetailResponse && productDetailResponse.data.description.length >= 200 ?
                    <span className={isOpenDesc ? 'detail_main_left_desc_arrow detail_main_left_desc_arrow_opposite' : 'detail_main_left_desc_arrow'} onClick={() => setIsOpenDesc(!isOpenDesc)}><IoIosArrowDown/> </span> :
                    ''
                  }
                </div> : ''
              }
              {
                productDetailResponse && productDetailResponse.data.characters.length != 0 ?
                <div className="detail_main_left_characters">
                  <p className="detail_main_left_desc_title">Characteristics</p>
                  {
                    productDetailResponse && productDetailResponse.data.characters.map(item => (
                      <div className="detail_main_left_character_body">
                      <div className="detail_main_left_character">
                        <p className='detail_main_left_character_title'>{item.title}</p>
                        <p className='detail_main_left_character_txt'>{item.body}</p>
                      </div>
                    </div> 
                    ))
                  }
                </div> :
                ''
              }
            </div>
            <div className="detail_main_right">
              <p className='prodeuct_detail_brand'>{productDetailResponse && productDetailResponse.data.brand.title}</p>
              <p className="product_detail_title">{productDetailResponse && productDetailResponse.data.title}</p>
              {
                productDetailResponse && productDetailResponse.data.attributes.map(item => (
                  <div className="product_details" key={item.id}>
                    <p className="product_detail_color_title">{item.title}</p>
                    <div className="product_detail_boxes">
                      {
                        item.data.map((itemAttribute, itemAttIndex) => (
                          <div className={item.title === "color" ? "product_detail_color" : activeIndex === itemAttribute.id ? "product_detail_box product_detail_box_active" : "product_detail_box"} style={{background: itemAttribute.title}} onClick={() => handleItemClick(itemAttribute.id)} key={itemAttribute.id}>{item.title !== "color" ? itemAttribute.title : ''}</div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }       
              <div className="product_details">
                <p className="product_detail_color_title">Quantity</p>
                <div className="product_detail_quantity">
                  <div className="product_detail_quantity_box">
                    <button><FaMinus/></button>
                    <p>0</p>
                    <button><FaPlus/></button>
                  </div>
                  <p className='product_detail_quantity_p'>23 in stock</p>
                </div>
              </div>
              <div className="detail_main_right_bottom">
                <p className='detail_main_right_bottom_p'>19 230 000 sum</p>
                <button className='detail_main_right_bottom_btn'>Add to card</button>
                <button className='detail_main_right_bottom_btn1'>Buy now</button>
              </div>
            </div>
        </div>
        
        {/* <pre>{JSON.stringify(productDetailResponse, null, 2)}</pre> */}
      </div>
    </div>
  )
}

export default ProductDetail;