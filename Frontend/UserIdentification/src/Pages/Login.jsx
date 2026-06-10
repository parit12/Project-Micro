import "./Login.css";
import DividerWithText from "../Components/DividerWithText";
import InputField from "../Components/InputField";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-main">
        <div className="login-form-wrapper">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p className="subtitle">Login to your account to continue</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
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

            <button className="login-button" type="submit">
              Login
            </button>
          </form>

          <DividerWithText text="or" />

          <p className="signup-text">
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign up
            </a>
          </p>
        </div>

        <div className="login-visual">
          <div className="visual-placeholder">
            <h2>Secure Login</h2>
            <p>Your account is protected with industry-standard security</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
