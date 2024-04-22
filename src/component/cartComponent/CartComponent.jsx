import { useEffect, useState } from 'react';
// css
import './cart.css';
// img
import img from '../../assets/images/img.png'
// icons                                                                                                                                                         
import { FaMinus, FaPlus } from 'react-icons/fa';
import { RiDeleteBinLine } from "react-icons/ri";
import { cartItemsApi } from '../../data/cartItemsApi';

const CartComponent = () => {
    const [count, setCount] = useState(0)

    let min = 0;
    let max = 10;

    const handleDec = () => {
      if (count > min) {
        setCount(count-1)
      }
    }
    
    const handleInc = () => {
        if(count < max){
            setCount(count+1)
        }
    }

    const [cartItemResponse, setCartItemResponse] = useState(null);

    useEffect(() => {
        const getCartItems = async () => {
            const response = await cartItemsApi.getCartItems()
            setCartItemResponse(response)
        }
        getCartItems();
    }, []);

  return (
    <div className='cart'>
        <div className="container">
            <div className="cart_main">
                <div className="cart_main_header">
                    <p className="cart_main_header_title">Your Cart</p>
                    <pre>{JSON.stringify(cartItemResponse, null, 2)}</pre>
                    <div className="cart_main_header_bottom">
                        <label className="cart_main_header_bottom_select">
                            <input type="checkbox" />
                            <p className='cart_main_header_bottom_select_title'>Select All (3)</p>
                        </label>
                        <button className="cart_main_header_bottom_btn">Remove Selection</button>
                    </div>
                </div>
                <div className="cart_main_table">
                    <div className="cart_main_table_nav">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                    <div className="cart_main_table_body">
                        <div className="cart_main_td">
                            <label className='cart_main_td_input'>
                                <input type="checkbox" />
                                <div className="forinput"></div>
                            </label>
                            <div className="cart_main_product">
                                <div className="cart_main_product_img">
                                    <img src={img} alt="" />
                                </div>
                                <div className="cart_main_product_txt">
                                    <p className='cart_main_product_txt_tiitle'>MacBook Air 13’’ and 15’’ models with M2 </p>
                                    <div className="cart_main_product_txt_data">
                                        <p className='cart_main_product_txt_data_title'>Color:</p>
                                        <p className='cart_main_product_txt_data_body'>Midnight</p>
                                    </div>
                                    <div className="cart_main_product_txt_data">
                                        <p className='cart_main_product_txt_data_title'>Memory:</p>
                                        <p className='cart_main_product_txt_data_body'>16 GB</p>
                                    </div>
                                    <div className="cart_main_product_txt_data">
                                        <p className='cart_main_product_txt_data_title'>SSD:</p>
                                        <p className='cart_main_product_txt_data_body'>256 GB</p>
                                    </div>
                                    <div className="product_detail_quantity cart_main_quantity">
                                        <div className="product_detail_quantity_box">
                                            <button onClick={handleDec} className={`cart_main_quantity_dec ${count === min ? 'cart_main_quantity_dec-opacity' : ''}`}><FaMinus/></button>
                                            <p>{count}</p>
                                            <button onClick={handleInc} className={`cart_main_quantity_dec ${count === max ? 'cart_main_quantity_dec-opacity' : ''}`}><FaPlus/></button>
                                        </div>
                                        <p className='product_detail_quantity_p'>23 in stock</p>
                                        <p className='cart_main_remove'>Remove <span><RiDeleteBinLine/></span></p>
                                    </div>
                                    <div className="cart_main_total_box cart_main_quantity">
                                        <p className='cart_main_product_txt_data_title'>Price:</p>
                                        <p className='cart_main_price'>4 920 000 sum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='cart_main_price cart_main_price_none'>4 920 000 sum</p>
                        <div className="product_detail_quantity cart_main_price_none">
                            <div className="product_detail_quantity_box">
                                <button onClick={handleDec}><FaMinus/></button>
                                <p>{count}</p>
                                <button onClick={handleInc}><FaPlus/></button>
                            </div>
                            <p className='product_detail_quantity_p'>23 in stock</p>
                            <p className='cart_main_remove cart_main_remove_none'>Remove <span><RiDeleteBinLine/></span></p>
                        </div>
                        <div className="cart_main_total_box cart_main_price_none">
                            <p className='cart_main_price'>4 920 000 sum</p>
                            <p className='cart_main_remove'>Remove <span><RiDeleteBinLine/></span></p>
                        </div>
                    </div>
                    <div className="cart_main_table_bottom">
                        <div className="cart_main_table_bottom_check">
                            <div className="cart_main_table_bottom_check_txt">
                                <p className='cart_main_table_bottom_check_title'>Subtotal (3 items)</p>
                                <p className='cart_main_table_bottom_check_price'>19 230 000 sum</p>
                            </div>
                            <p className="cart_main_table_bottom_check_text">Tax included. Shipping calculated at checkout.</p>
                            <button className='cart_main_table_bottom_check_btn'>Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartComponent