import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import {
  ForgotPassword,
  CheckYourEmail,
  SetNewPassword,
  PasswordReset,
} from "./Pages/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckYourEmail />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
