import { useState } from "react";
// css
import "./order.css"
// icons
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
// img
import img from '../../assets/images/img.png';


const OrderComponent = () => {
    const [isOpenProducts, setIsOpenProducts] = useState();
  return (
    <div className="order">
        <div className="order_container">
            <div className="order_main">
                <div className="order_main_header">
                    <div className="order_main_header_left">
                        <p className="order_main_header_left_allorder">All Orders <span><IoIosArrowDown/></span></p>
                        <p className="order_main_header_left_sort">Sort By <span><IoIosArrowDown/></span></p>
                    </div>
                    <div className="order_main_header_right">
                        <input type="text" placeholder="Search" />
                        <span><FiSearch/></span>
                    </div>
                </div>
                <div className="order_main_body">
                    <div className="order_main_body_box">
                        <div className="order_main_body_box_header">
                            <p className="order_main_body_box_header_numb">#10021</p>
                        </div>
                        <div className="order_main_body_box_info">
                            <div className="order_main_body_box_info_left">
                                <div className="order_main_body_box_info_left_box">
                                    <p>Quantity of products:</p>
                                    <p>2</p>
                                </div>
                                <div className="order_main_body_box_info_left_box">
                                    <p>Date:</p>
                                    <p>19.01.2024</p>
                                </div>
                            </div>
                            <div className="order_main_body_box_info_right">
                                <div className="order_main_body_box_info_left_box">
                                    <p>Status:</p>
                                    <p><span></span> Delivered</p>
                                </div>
                                <div className="order_main_body_box_info_left_box">
                                    <p>Total cost:</p>
                                    <p>UZS4,920,000</p>
                                </div>
                            </div>
                        </div>
                        <div className={isOpenProducts ? "order_main_body_box_products order_main_body_box_products_close" : "order_main_body_box_products"}>
                            <div className="order_main_body_box_product">
                                <div className="order_main_body_box_product_left">
                                    <div className="order_main_body_box_product_left_img">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="order_main_body_box_product_left_txt">
                                        <p className="order_main_body_box_product_left_txt_title">MacBook Air 13’’ and 15’’ models with M2 </p>
                                        <div className="order_main_body_box_product_left_txt_attribute">
                                            <p>Color:</p>
                                            <p>Midnight</p>
                                        </div>
                                        <div className="order_main_body_box_product_left_txt_attribute">
                                            <p>Memory:</p>
                                            <p>16 GB</p>
                                        </div>
                                        <div className="order_main_body_box_product_left_txt_attribute">
                                            <p>SSD:</p>
                                            <p>256 GB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order_main_body_box_product_right">
                                    <p>4 920 000 sum</p>
                                    <p>1 item</p>
                                </div>
                            </div>

                            <div className="order_main_body_box_product">
                                <div className="order_main_body_box_product_left">
                                    <div className="order_main_body_box_product_left_img">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="order_main_body_box_product_left_txt">
                                        <p className="order_main_body_box_product_left_txt_title">MacBook Air 13’’ and 15’’ models with M2 </p>
                                        <div className="order_main_body_box_product_left_txt_attribute">
                                            <p>Color:</p>
                                            <p>Midnight</p>
                                        </div>
                                        <div className="order_main_body_box_product_left_txt_attribute">
                                            <p>Memory:</p>
                                            <p>16 GB</p>
                                        </div>
                                        <div className="order_main_body_box_product_left_txt_attribute">
                                            <p>SSD:</p>
                                            <p>256 GB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order_main_body_box_product_right">
                                    <p>4 920 000 sum</p>
                                    <p>1 item</p>
                                </div>
                            </div>
                        </div>
                        <div className="order_main_body_box_bottom" onClick={() => setIsOpenProducts(!isOpenProducts)}>
                            <p>Products in order (2)</p>
                            <span className={!isOpenProducts ? "order_main_body_box_bottom_arrow order_main_body_box_bottom_arrow_open" : "order_main_body_box_bottom_arrow"}><IoIosArrowDown/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderComponent;