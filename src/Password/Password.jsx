

import "./Password.css";
import { CiLock } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";



function Password(){

  const[password, setPassword] = useState("");
   const[passwordError, setPasswordError] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const[confirmPassword, setConfirmPassword] = useState("");
   const[confirmPasswordError, setConfirmPasswordError] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();


      if (password.trim() === "") {
      setPasswordError("password is required");
      return;
    } 
    else if (password.length < 6) {
      setPasswordError("password must be at least 6 characters");
      return;
    }
    else{
      setPasswordError("")
    }

    if(confirmPassword.trim() === ""){
      setConfirmPasswordError("Confirm password is required");
      return;
    }
    else if(password !== confirmPassword){
      setConfirmPasswordError("Password do not match");
      return;
    }
    else{
      setConfirmPasswordError("");
      console.log("Password reset completed");
    }
    }
    const togglePassword = () => {
      setShowPassword(!showPassword);
      
    };

    const toggleConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    }


    return(
        <div className="container">
          <div className="form-container"> 
    
        <form className="reset"  onSubmit={handleSubmit}>

            <h2>Reset Password</h2>

              <div className="inputarea">
                              <div className="Input">
                                 <label for="">Create Password<span>*</span></label>
                                    <div className={passwordError ? "inputIcon error" : "inputIcon"}>
                                 <CiLock size={20}/>
                                 <input type={showPassword ? "text" : "password"}  placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <span onClick={togglePassword}>
                                                {showPassword ? (
                                                  <FaEyeSlash size={20} style={{ color: "grey" }} />
                                                ) : (
                                                  <FaEye size={20} style={{ color: "grey" }} />
                                                )}
                                              </span>
                                 </div>
                              </div>
                               {passwordError && (
                           <p className="error-text" style={{ color: "red" }}>
                             {passwordError}
                           </p>
                             )}
                          </div>  
             
                          <div className="inputarea">
                              <div className="Input">
                                 <label for="">Confirm Password<span>*</span></label>
                                    <div className={confirmPasswordError ? "inputIcon error" : "inputIcon"}>
                                 <CiLock size={20}/>
                                 <input type={showConfirmPassword ? "text" : "password"}  placeholder="Enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                <span onClick={toggleConfirmPassword}>
                                                {showConfirmPassword ? (
                                                  <FaEyeSlash size={20} style={{ color: "grey" }} />
                                                ) : (
                                                  <FaEye size={20} style={{ color: "grey" }} />
                                                )}
                                              </span>
                                 </div>
                              </div>
                               {confirmPasswordError && (
                           <p className="error-text" style={{ color: "red" }}>
                             {confirmPasswordError}
                           </p>
                             )}
                          </div>  

                {/* <button>Reset Password</button> */}
                 <Button text="Reset Password" type="submit" />

        </form>
        </div>
        </div>

    )
};

export default Password;