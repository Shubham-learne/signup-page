import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";
import Forgot from "./Forgot/Forgot";
import Password from "./Password/Password";
import Dashboard from "./Dashboard/Dashboard";
import Data from "./Data/Data";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/password" element={<Password />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default App;
