import { useEffect, useState } from 'react';
// data
import { promoApi } from '../../data/promoApi.js';
// css
import './promo.css'
// context
import { useContextProvider } from '../../context/Context.jsx';

const Promo = () => {
  const { language } = useContextProvider();

  const [promoResponse, setPromoResponse] = useState(null)

  useEffect(() => {
    const getPromo = async () => {
        const response = await promoApi.getPromo(language)
        setPromoResponse(response)
    }

    getPromo();
},[language])
  return (
    <div className='promo'>
      <div className="container">
        <div className="promo_box">
            {
              promoResponse && promoResponse.left && (
                <div className="promo_box_vid">
                  <video src={promoResponse.left.image} autoPlay loop muted/>
                  <div className="promo_box_vid_overlay">
                    <p className='promo_box_vid_text'>{promoResponse.left.title}</p>
                  </div>
                </div>
              )
            }
          {
            promoResponse && promoResponse.right && (
              <div className="promo_box_sale">
                <div className="promo_box_sale_data">
                  <p className='promo_box_sale_data_name'>Apple Watch Series 9</p>
                  <p className='promo_box_sale_data_title'>{promoResponse.right.title}</p>
                  <p className='promo_box_sale_data_price'>{promoResponse.right.body}</p>
                  <div className="promo_box_sale_data_img">
                    <img src={promoResponse.right.image} alt="" />
                  </div>
                </div>
                <div className="promo_box_sale_btn">
                  <p>Sale *</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Promo