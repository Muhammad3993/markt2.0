import { useEffect, useState } from "react";
// data
import { promosNew } from "../../data/promosNew";
// css
import "./newRelaese.css"
// img
import img from "../../assets/images/image.png";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/watch.webp";

const NewRelaese = () => {

  const [promosNewResponse, setPromosNewResponse] = useState(null)

  useEffect(() => {
    const getPromosNew = async () => {
      const response = await promosNew.getPromosNew()
      setPromosNewResponse(response)
  }

  getPromosNew();
  }, [])
  return (
    <div className='newRelaese'>
      <div className="container">
        <div className="newRelaese_main">
        {/* <pre>{JSON.stringify(promosNewResponse, null, 2)}</pre> */}
          <div className="newRelaese_main_product">
            <div className="newRelaese_main_product_img">
              <img src={img} alt="" />
            </div>
            <div className="newRelaese_main_product_txt">
              <p className="newRelaese_main_product_l-title">iPhone 15 vs iPhone 13</p>
              <p className="newRelaese_main_product_title">How do they compare?</p>
            </div>
          </div>
          <div className="newRelaese_main_product">
            <div className="newRelaese_main_product_img">
              <img src={img1} alt="" />
            </div>
            <div className="newRelaese_main_product_txt">
              <p className="newRelaese_main_product_l-title">new releases</p>
              <p className="newRelaese_main_product_title">The Samsung Galaxy S24 range is here</p>
            </div>
          </div>
          <div className="newRelaese_main_product">
            <div className="newRelaese_main_product_img">
              <img src={img2} alt="" />
            </div>
            <div className="newRelaese_main_product_txt">
              <p className="newRelaese_main_product_l-title">Apple Watch Series 9</p>
              <p className="newRelaese_main_product_title">Any case. Any band. Any style you want.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewRelaese;