

import Button from "../components/common/Button";
import { BsTelephone } from "react-icons/bs";


function Data() {
  return (
    <div className='container'>
          <div className="form-container">
        <form className='form'>
            <h2>DashBoard Data</h2>
             <div className="inputArea">
                  <label htmlFor="">Name:</label>
                  <input type="text"  placeholder='Enter name'/>
             </div>

               <div className="inputArea">
                        <label for="">Contact<span>*</span></label>
                            <div className="contact">
                                <select id="countryCode" >
                                      <option value="+91">INDIA(+91)</option>
                                      <option value="+971">UAE(+971)</option>
                                      <option value="+1">USA(+1)</option>
                                      <option value="+44">UK(+44)</option>
                                  </select>
                              </div>
                                     <div >
                                  <BsTelephone size={20} />
                                  <input type="tel"  placeholder="Enter Contact number" maxLength={10}/>
                                  </div>
                            </div> 

             <div className="inputArea">
                <label htmlFor="">Email</label>
                 <input type="text" placeholder='Enter Email'/>
             </div>

            <div className='inputArea'>
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Enter Address' />
            </div>

            <Button text="Send Data" type="submit" className="button" />

        </form>
      </div>
    </div>
  )
};

export default Data;
