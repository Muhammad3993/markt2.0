// css
import "./promoVideo.css"
// video
import vid from "../../assets/videos/vid.webm"
import { Link } from "react-router-dom"

const PromoVideo = () => {
  return (
    <div className='promoVideo'>
        <video src={vid} autoPlay loop muted/>
        <div className="promoVideo_content">
            <Link to={'/'} className="promoVideo_content_link">
                <p className="promoVideo_content_title">Galaxy S24 Ultra</p>
                <p className="promoVideo_content_l-title">Galaxy AI is here</p>
                <button className="promoVideo_content_btn">Shop now *</button>
            </Link>
        </div>
    </div>
  )
}

export default PromoVideo