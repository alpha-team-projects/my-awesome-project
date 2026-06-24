import "./Login.css";

import userIcon from "../assets/person.png";
import emilIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login To Your Account</div>
        <div className="underline"></div>
        <p className="paragraph">
          Access Your Apex Skill Acquisiton <br />
          Student Account
        </p>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={userIcon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={emilIcon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <a href="#" className="forgot-paas-link">
        Forgot Password?
      </a>

      <button className="login-button">Log In</button>

      <div className="signup-text">
        Don't have an account? <a href="#">Sign Up Now</a>
      </div>
    </div>
  );
};

export default Login;
