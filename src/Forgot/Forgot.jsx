
import "./forgot.css";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/common/Button";

function Forgot() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setUsernameError("");
    setError("");

    const storedUser = JSON.parse(localStorage.getItem("signupUser"));

    if (!username.trim()) {
      setUsernameError("Username is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
      setUsernameError("Enter valid email address");
      return;
    }

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    if (username === storedUser.email) {
      navigate("/password");
    } else {
      setError("Email not found");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="Form" onSubmit={handleLogin}>
          <h2>Forgot Password?</h2>

          <div className="inputArea">
            <label htmlFor="username">
              Username <span>*</span>
            </label>

            <div className={usernameError ? "input error" : "input"}>
              <CgProfile size={25} style={{ color: "grey" }} />
              <input
                id="username"
                type="email"
                placeholder="Enter email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError("");
                  setError("");
                }}
              />
            </div>

            {usernameError && (
              <p className="error-text">{usernameError}</p>
            )}

            {error && <p className="error-text">{error}</p>}
          </div>

          <Button text="Forgot Password" type="submit" />

          <p className="para">
            <Link to="/" style={{ color: "#013873" }}>
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
