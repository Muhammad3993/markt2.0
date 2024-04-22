// css
import "./account.css";
// icons
import { IoIosLogOut } from "react-icons/io";

const AccountForm = () => {
  return (
    <div className='accountform'>
        <div className="container">
            <div className="accountform_main">
                <p className="accountform_main_title">Personal Information</p>
                <form action="" className="accountform_main_form">
                    <label className="accountform_main_input">
                        <p className="accountform_main_input_title">First Name*</p>
                        <input type="text" name="" id="" placeholder='Text' />
                    </label>
                    <label className="accountform_main_input">
                        <p className="accountform_main_input_title">Last Name*</p>
                        <input type="text" name="" id="" placeholder='Text' />
                    </label>
                    <label className="accountform_main_input">
                        <p className="accountform_main_input_title">Email*</p>
                        <input type="text" name="" id="" placeholder='Text' />
                    </label>
                    <label className="accountform_main_input">
                        <p className="accountform_main_input_title">Phone Number*</p>
                        <input type="text" name="" id="" placeholder='Text' />
                    </label>
                    <label className="accountform_main_input">
                        <p className="accountform_main_input_title">@telegram</p>
                        <input type="text" name="" id="" placeholder='Text' />
                    </label>
                    <div className="accountform_main_btns">
                        <div className="accountform_main_btns_left">
                            <button className="accountform_main_btn accountform_main_btn_update">Update Changes</button>
                            <button className="accountform_main_btn accountform_main_btn_cencel">Cencel</button>
                        </div>
                        <div className="accountform_main_btns_right">
                            <p className="accountform_main_btns_right_title">Log out from your account?</p>
                            <button className="accountform_main_btn accountform_main_btn_logout"><span><IoIosLogOut/></span>Log Out</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AccountForm