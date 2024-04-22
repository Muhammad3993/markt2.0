// icons
import { AiOutlineClose } from 'react-icons/ai';
// css
import './sign.css';
// icons
import { DiGithubBadge, DiGithubFull } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sign = ({isOpenSign, setIsOpenSign}) => {
  return (
    <div className={!isOpenSign ? 'sign sign_close' : 'sign'}>
      <div className="sign_box">
        <button className="sign_box_close" onClick={() => setIsOpenSign(false)}><AiOutlineClose/></button>
        <p className="sign_box_title">Sign in to Markt</p>
        <div className="sign_boxes">
          <Link to={"/"} className="sign_box_google">
            <span><FcGoogle/></span>
            <p>Continue with Google</p>
          </Link>
          <p className='sign_boxes_title'>Or</p>
          <div className="sign_boxes_duo">
            <Link to={"/"} className="sign_box_telegram">
              <span><FaTelegram/></span>
              <p>Telegram</p>
            </Link>
            <Link to={"/"} className="sign_box_git">
              <div className="sign_box_git_icons">
                <span><DiGithubBadge/></span>
                <span><DiGithubFull/></span>
              </div>
              <p>GitHub</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sign_overlay" onClick={() => setIsOpenSign(false)}></div>
    </div>
  )
}

export default Sign