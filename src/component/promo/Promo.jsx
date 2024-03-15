import { useEffect, useState } from 'react';
// data
import { promoApi } from '../../data/promoApi.js';
// css
import './promo.css'
// videos
import vid from '../../assets/videos/vid.mp4'

const Promo = () => {
    const [promoResponse, setPromoResponse] = useState(null)

    useEffect(() => {
        const getPromo = async () => {
            const response = await promoApi.getPromo()
            setPromoResponse(response)
        }

        getPromo();
    },[])


  return (
    <div className='promo'>
      <div className="container">
        <div className="promo_box">
          <div className="promo_box_vid">
            <video src={vid} autoPlay loop muted/>
            <div className="promo_box_vid_overlay">
              <p className='promo_box_vid_text'>Incredible speed and battery life?</p>
            </div>
          </div>
          {
            promoResponse && promoResponse.left && (
              <div className="promo_box_sale" key={promoResponse.left.id}>
                <div className="promo_box_sale_data">
                  <p className='promo_box_sale_data_name'>Apple Watch Series 9</p>
                  <p className='promo_box_sale_data_title'>{promoResponse.left.title}</p>
                  <p className='promo_box_sale_data_price'>from: $399</p>
                  <div className="promo_box_sale_data_img">
                    <img src={promoResponse.left.image} alt="" />
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