import "./login.css";
import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("signupUser"));

    if (username.trim() === "") {
      setUsernameError("username is required");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
      setUsernameError("Enter valid Email address");
      return;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("password is required");
      return;
    } else if (password.length < 6) {
      setPasswordError("password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    if (username === storedUser.email && password === storedUser.password) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="image-container">
          <h3>Welcome to our Page</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <form className="logIn" onSubmit={handleLogin}>
          <h2>Login</h2>

          <div className="inputArea">
            <label for="">
              Username<span>*</span>
            </label>
            <div className={usernameError ? "input error" : "input"}>
              <CgProfile size={25} style={{ color: "grey" }} />
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {usernameError && (
              <p className="error-text" style={{ color: "red" }}>
                {usernameError}
              </p>
            )}
          </div>

          <div className="inputArea">
            <label for="">
              Password<span>*</span>
            </label>

            <div className={passwordError ? "input error" : "input"}>
              <CiLock size={25} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span onClick={togglePassword}>
                {showPassword ? (
                  <FaEyeSlash size={20} style={{ color: "grey" }} />
                ) : (
                  <FaEye size={20} style={{ color: "grey" }} />
                )}
              </span>
            </div>
            {passwordError && (
              <p className="error-text" style={{ color: "red" }}>
                {passwordError}
              </p>
            )}

            {error && <p style={{ color: "red" }}>{error}</p>}

            <Link to="/forgot">Forgot password?</Link>
          </div>

          <Button text="LOG IN" type="submit" className="button" />

          <div className="social-icons">
            <p>or Sign Up using </p>
            <div className="icons">
              <div className="fb">
                <Link to="https://www.facebook.com/">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="twitter">
                <Link to="https://x.com/">
                  <FaTwitter />
                </Link>
              </div>
              <div className="google">
                <Link to="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-2112558365%3A1769601249415641">
                  <FaGoogle />
                </Link>
              </div>
            </div>
          </div>

          <div className="bottom">
            <p>
              Don't have a account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
