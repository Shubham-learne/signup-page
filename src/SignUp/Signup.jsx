import "./signup.css";
import { BsTelephone } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link }  from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";


function SignUp() {

   const[firstName, setFirstName] = useState("");
   const[firstNameError, setFirstNameError] = useState("");

   const[lastName, setLastName] = useState("");
   const[LastNameError, setLastNameError] = useState("");

   const[number, setNumber] = useState("");
   const[numberError, setNumberError] = useState("");

   const[email, setEmail] = useState("");
   const[emailError, setEmailError] = useState("");

   const[password, setPassword] = useState("");
   const[passwordError, setPasswordError] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const[confirmPassword, setConfirmPassword] = useState("");
   const[confirmPasswordError, setConfirmPasswordError] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

           

   const handleSubmit = (e) => {
      e.preventDefault();

      if(firstName.trim() === ""){
      setFirstNameError("Enter Name");
      return;
   }else{
      setFirstNameError("");
   }

    if(lastName.trim() === ""){
      setLastNameError("Enter Last name");
      return;
   }else{
      setFirstNameError("");
   
   }

    if(number.trim() === ""){
      setNumberError("Enter contact number");
      return;
    }
     else if(!/^[6-9]\d{9}$/.test(number)){
      setNumberError("Enter valid 10 digit contact number");
      return;
    }
    else{
      setNumberError("");
    }
   
    if(email.trim() === ""){
      setEmailError("Enter Email address");
      return;
    } 
     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter valid Email address");
      return;
    }
    else{
      setEmailError("");
    }

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
    }

    const userData = {
  firstName,
  lastName,
  number,
  email,
  password,
};

localStorage.setItem("signupUser", JSON.stringify(userData));


navigate("/");
   

};
const togglePassword = () => {
      setShowPassword(!showPassword);
      
    };

    const toggleConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };




    return(
        <div className="container">

         <div className="form-container">

         <div className="Image-container">
         <h3>Come join us!</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           </p>
    </div>
           
           <form className="form" onSubmit={handleSubmit}>

             <h2>SignUp Form</h2> 

             <div className="inputName">
                 <div className="Input">
                    <label for="">First Name<span>*</span></label>
                    <div className={firstNameError ? "inputIcon error" : "inputIcon"}>
                    <LuUserRound size={20}/>
                    <input type="text" placeholder="First Name" value={firstName}  onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                     {firstNameError && (
              <p className="error-text" style={{ color: "red" }}>
                {firstNameError}
              </p>
            )}
            </div>
                      <div className="Input">
                    <label for="">Last Name</label>
                     <div className="inputIcon">
                    <LuUserRound size={20}/>
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                 </div>
             </div>

             <div className="inputarea">
                 <div className="Input">
                    <label for="">Contact<span>*</span></label>
                    <div className="contact">
                     <select id="countryCode" >
                        <option value="+91">INDIA(+91)</option>
                        <option value="+971">UAE(+971)</option>
                        <option value="+1">USA(+1)</option>
                        <option value="+44">UK(+44)</option>
                    </select>
                
                       <div className={numberError ? "inputIcon error" : "inputIcon"} style={{width: "100%"}}>
                    <BsTelephone size={20} />
                    <input type="tel"  placeholder="Enter Contact number" maxLength={10} value={number} onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}/>
                    </div>

                    </div>
                </div>
                {numberError && (
              <p className="error-text" style={{ color: "red" }}>
                {numberError}
              </p>
                )}
             </div>  

                <div className="inputarea">
                 <div className="Input">
                    <label for="">Email<span>*</span></label>
                       <div className={emailError ? "inputIcon error" : "inputIcon"}>
                   <MdOutlineEmail size={20} style={{color: "grey"}}/>
                    <input type="email"  placeholder="Enter Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                 </div>
                 {emailError && (
              <p className="error-text" style={{ color: "red" }}>
                {emailError}
              </p>
                )}
             </div>  
             
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

          
       <Button
  text="SIGN UP"
  type="submit"
/>
          <div className="bottomText">
            <p>Already have an account? <Link style={{color:"black"}} to="/"> Sign In</Link></p>
             <Link style={{color:"black"}} to="/Data" >Add Dashboard details</Link>
          </div>


           

           </form>
</div>
        </div>
    )
}
export default SignUp;