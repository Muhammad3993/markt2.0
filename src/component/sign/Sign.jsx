// icons
import { AiOutlineClose } from 'react-icons/ai';
// css
import './sign.css';
// icons
import { DiGithubBadge, DiGithubFull } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userApi } from '../../data/userApi';


const Sign = ({isOpenSign, setIsOpenSign}) => {
  const handleUrl = (url) => {
   const urL = url;
   window.location.href = urL;
   return urL;
  }
  
  const [userResponse, setUserResponse] = useState(null)
  useEffect(() => {
   const getUser = async () => {
     const response = await userApi.getUser()
     setUserResponse(response)
   }
   getUser();
  },[])
  return (
    <div className={!isOpenSign ? 'sign sign_close' : 'sign'}>
      <div className="sign_box">
        <button className="sign_box_close" onClick={() => setIsOpenSign(false)}><AiOutlineClose/></button>
        <p className="sign_box_title">Sign in to Markt</p>
        <div className="sign_boxes">
          <button onClick={() => handleUrl("https://api.markt.circle.uz/api/v1/auth/google/redirect")} className="sign_box_google">
            <span><FcGoogle/></span>
            <p>Continue with Google</p>
          </button>
          <p className='sign_boxes_title'>OR</p>
          <div className="sign_boxes_duo">
            <button onClick={() => handleUrl("https://api.markt.circle.uz/api/v1/auth/telegram/redirect")} className="sign_box_telegram">
              <span><FaTelegram/></span>
              <p>Telegram</p>
            </button>
            <button onClick={() => handleUrl("https://api.markt.circle.uz/api/v1/auth/github/redirect")} className="sign_box_git">
              <div className="sign_box_git_icons">
                <span><DiGithubBadge/></span>
                <span><DiGithubFull/></span>
              </div>
              <p>GitHub</p>
            </button>
          </div>
        </div>
        <pre>{JSON.stringify(userResponse, null, 2)}</pre>
      </div>
      <div className="sign_overlay" onClick={() => setIsOpenSign(false)}></div>
    </div>
  )
}

export default Sign