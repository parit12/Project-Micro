import InputField from "../Components/InputField";
import "./ForgotPassword.css";

import { useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const navigate = useNavigate();
  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/check-email");
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-main">
        <div className="forgot-password-form-wrapper">
          <div className="forgot-password-header">
            <h1>Reset Password</h1>
            <p className="subtitle">Enter your email to reset your password</p>
          </div>

          <form
            className="forgot-password-form"
            onSubmit={handleForgotPassword}
          >
            <InputField
              lable="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
            />

            <button className="forgot-password-button" type="submit">
              Send Reset Link
            </button>
          </form>

          <p className="forgot-password-text">
            Remember your password?{" "}
            <a href="/login" className="forgot-password-link">
              Back to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export function CheckYourEmail() {
  return (
    <div className="check-password-container">
      <div className="check-password-main">
        <div className="check-password-form-wrapper">
          <div className="check-password-header">
            <h1>Check Your Email</h1>
            <p className="subtitle">
              We have sent a password reset link to xyzw@example.com
            </p>
          </div>

          <button className="open-email-button">Open email app</button>

          <div className="divider">
            <hr className="divider-line" />
            <span className="divider-text">or</span>
            <hr className="divider-line" />
          </div>

          <p className="check-password-text">
            Didn't receive the email?{" "}
            <a href="/forgot-password" className="check-password-link">
              Click to resend
            </a>
          </p>

          <button
            className="back-to-login-button"
            onClick={() => (globalThis.location.href = "/login")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export function SetNewPassword() {
  return (
    <div className="set-password-container">
      <div className="set-password-main">
        <div className="set-password-form-wrapper">
          <div className="set-new-password-header">
            <form className="set-password-form">
              <h1>Set New Password</h1>
              <p className="subtitle">Enter your new password below</p>
              <InputField
                label="New Password"
                placeholder="Enter new password"
                type="password"
                name="new-password"
                className="password-input"
              />
              <InputField
                label="Confirm Password"
                placeholder="Confirm new password"
                type="password"
                name="confirm-password"
                className="password-input"
              />
              <div className="text-block">
                <p>Must be at least 8 characters long</p>
                <p>
                  {" "}
                  Must contain at least one uppercase letter, one lowercase
                  letter, and one number
                </p>
              </div>
              <button className="set-password-button">Reset Password</button>
            </form>
            <a href="/login" className="back-to-login-link">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PasswordReset() {
  return (
    <div className="password-reset-container">
      <div className="password-reset-main">
        <h1 id="heading">Password Reset Successful</h1>
        <p id="text">
          Your password has been reset successfully.
          <br /> You can now log in with your new password.
        </p>
        <button id="continue">Continue</button>
      </div>
    </div>
  );
}
