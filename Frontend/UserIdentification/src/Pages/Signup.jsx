import InputField from "../Components/InputField";
import DividerWithText from "../Components/DividerWithText";
import "./Signup.css";

function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-container">
      <div className="signup-main">
        <div className="signup-form-wrapper">
          <div className="signup-header">
            <h1>Get Started</h1>
            <p className="subtitle">Create an account to continue</p>
          </div>

          <form className="signup-form" onSubmit={handleSignup}>
            <InputField
              label="Name"
              placeholder="Enter your name"
              type="text"
              name="name"
            />

            <InputField
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
            />

            <InputField
              label="Password"
              placeholder="Password"
              type="Password"
              name="Password"
            />

            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>

            <button className="signup-button" type="submit">
              Sign Up
            </button>
          </form>

          <DividerWithText text="or" />

          <p className="signup-text">
            Already have an account?{" "}
            <a href="/login" className="signup-link">
              Log in
            </a>
          </p>
        </div>

        <div className="signup-visual">
          <div className="visual-placeholder">
            <h2>Secure Signup</h2>
            <p>Your account is protected with industry-standard security</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
