// css
import "./about.css"
// img
import img from "../../assets/images/markt.png";

const AboutComponent = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="about_main">
                <div className="about_main_header">
                    <div className="about_main_header_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="about_main_header_txt">
                        <p className="about_main_header_txt_title">About Us</p>
                        <p className="about_main_header_txt_body">We are two sisters, Penny and Georgie Brown - a very practical duo. Our belongings are made to stand the test of time, to be thrown into a backpack and used wherever we end up.  What we wear is an expression of our laidback nature. We are inspired by our surroundings - the bush, desert, forest, beach - and create clothes to take us cross country. To take us off road.  We work with people who understand our ethos and who are as committed to our environment as we are. </p>
                    </div>
                </div>
                <div className="about_main_images">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent