// css
import { useEffect, useState } from 'react'
import './productDetailComponent.css'
// data
import { productDetailApi } from '../../data/productDetailApi'
import { useParams } from 'react-router-dom';
// img
import img from '../../assets/images/img.png'
// icons
import { IoIosArrowDown } from "react-icons/io";

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
                <div className="detail_main_left_img" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
                  <img src={img} alt="" style={isHovered ? { position: 'absolute',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: '100%',
                     transform: `translate(-${position.x}%, -${position.y}%) scale(2)`,
                     transformOrigin: 'top left',} : {}}/>
                </div>        <div className="detail_main_left_img">
                  <img src={img} alt="" />
                </div>        <div className="detail_main_left_img">
                  <img src={img} alt="" />
                </div>        <div className="detail_main_left_img">
                  <img src={img} alt="" />
                </div>  <div className="detail_main_left_img full-width">
                  <img src={img} alt="" />
                </div>  <div className="detail_main_left_img full-width">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="detail_main_left_desc">
                <p className='detail_main_left_desc_title'>Description</p>
                <p className={isOpenDesc ? 'detail_main_left_desc_body detail_main_left_desc_body_open' : 'detail_main_left_desc_body'}>Our most powerful chip in Apple Watch ever. A magical new way to use your Apple Watch without touching the screen. A display that’s twice as bright. And now you can choose a watch case and band combination that’s carbon neutral. Our most powerful chip in Apple Watch ever. A magical new way to use your Apple Watch without touching the screen. A display that’s twice as bright. And now you can choose a watch case and band combination that’s carbon neutral.</p>
                <span className={isOpenDesc ? 'detail_main_left_desc_arrow detail_main_left_desc_arrow_opposite' : 'detail_main_left_desc_arrow'} onClick={() => setIsOpenDesc(!isOpenDesc)}><IoIosArrowDown/></span>
              </div>
              <div className="detail_main_left_characters">
                <p className="detail_main_left_desc_title">Characteristics</p>
                <div className="detail_main_left_character_body">
                  <div className="detail_main_left_character">
                    <p className='detail_main_left_character_title'>Model</p>
                    <p className='detail_main_left_character_txt'>Series 9</p>
                  </div>
                </div>       
                <div className="detail_main_left_character_body">
                  <div className="detail_main_left_character">
                    <p className='detail_main_left_character_title'>CPU</p>
                    <p className='detail_main_left_character_txt'>Series 9</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail_main_right">
              <p className='prodeuct_detail_brand'>Apple</p>
              <p className="product_detail_title">MacBook Air 13’’ and 15’’ models with M2 chip</p>
              <div className="product_details">
                <p className="product_detail_color_title">Colors</p>
                <div className="product_detail_colors">
                  <div className="product_detail_color"></div>
                  <div className="product_detail_color"></div>
                  <div className="product_detail_color"></div>
                  <div className="product_detail_color"></div>
                  <div className="product_detail_color"></div>
                </div>
              </div>
              <div className="product_details">
                <p className="product_detail_color_title">Display</p>
                <div className="product_detail_boxes">
                  <div className="product_detail_box product_detail_box_active">
                    128 mm
                  </div>                  <div className="product_detail_box">
                    128 mm
                  </div>                  <div className="product_detail_box">
                    128 mm
                  </div>                  <div className="product_detail_box">
                    128 mm
                  </div>
                </div>
              </div>         
              <div className="product_details">
                <p className="product_detail_color_title">Quantity</p>
                <div className="product_detail_quantity">
                  <div className="product_detail_quantity_box">
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                  </div>
                  <p>23 in stock</p>
                </div>
              </div>
            </div>
        </div>
        <pre>{JSON.stringify(productDetailResponse, null, 2)}</pre>
      </div>
    </div>
  )
}

export default ProductDetail;