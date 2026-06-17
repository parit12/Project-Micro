import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import {
  ForgotPassword,
  CheckYourEmail,
  SetNewPassword,
  PasswordReset,
} from "./Pages/ForgotPassword";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSessionTimeout } from "./Components/SessionTimeout";

import "./App.css";
import Logoff from "./Pages/Logoff";
function App() {
  const navigate = useNavigate();
  const handleSessionTimeout = () => {
    navigate("/logout");
  };
  useSessionTimeout(5 * 60 * 30, handleSessionTimeout);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckYourEmail />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/logout" element={<Logoff />} />
      </Routes>
    </div>
  );
}

export default App;
