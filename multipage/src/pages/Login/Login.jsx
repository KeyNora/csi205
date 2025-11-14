import { useRef } from "react";
import Form from "react-bootstrap/Form";
import { verifyUser } from "../../data/users";
import "./Login.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();

    if (!user || !pass) {
      alert("Please fill in both username and password!");
      return;
    }

    const userInfo = verifyUser(user, pass);
    if (userInfo === null) {
      alert("Wrong username or password!");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
      userRef.current.value = "";
      passRef.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h3 className="mb-3" style={{ textAlign: "center" }}>
          Login
        </h3>

<Form.Control
  type="text"
  id="username"
  placeholder="Enter your username (Username Type user)"
  ref={userRef}
  onKeyDown={handleKeyDown}
/>



<Form.Control
  type="password"
  id="password"
  placeholder="Enter your password (Password Type pass) "
  ref={passRef}
  onKeyDown={handleKeyDown}
  
/>


        <button className="btn btn-success mt-3 w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
