// css
import "./order.css"
// icons
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";


const OrderComponent = () => {
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
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderComponent;