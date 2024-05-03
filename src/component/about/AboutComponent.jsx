// css
import "./about.css"
// img
import img from "../../assets/images/markt.png";
import img1 from "../../assets/images/about.png";
import img2 from "../../assets/images/about1.png";
import img3 from "../../assets/images/about2.png";
import img4 from "../../assets/images/about3.png";

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
                <div className="about_main_body">
                    <div className="about_main_body_right">
                        <p className="about_main_body_title">Delivery</p>
                        <p className="about_main_body_txt">We are two sisters, Penny and Georgie Brown - a very practical duo. Our belongings are made to stand the test of time, to be thrown into a backpack and used wherever we end up. </p>
                    </div>
                </div>
                <div className="about_main_images">
                     <div className="about_main_image">
                        <img src={img1} alt="" />
                     </div>
                     <div className="about_main_image">
                        <img src={img2} alt="" />
                     </div>
                     <div className="about_main_image">
                        <img src={img3} alt="" />
                     </div>
                     <div className="about_main_image">
                        <img src={img4} alt="" />
                     </div>
                </div>
                <div className="about_main_bottom">
                    <div className="about_main_bottom_left">
                        <p className="about_main_bottom_left_title">Contacts</p>
                        <p>71 200 12 22</p>
                        <p>markt@sales.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent