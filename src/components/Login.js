import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    //console.log(formData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        //console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const guestLoginHandler = () => {
    setFormData({ ...formData, email: "test@gmail.com", password: "test123" });
    // formData.email = "test@gmail.com";
    // formData.password = "test123";
    //console.log(formData);
    toast.success(`Logged as Guest!`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
  };

  return (
    <div className="signup-container">
      <h3>LogIn to your account</h3>
      <form onSubmit={submitHandler}>
        <div className="input">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="input">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            required
          />
        </div>
        <b className="error">{errorMsg}</b>
        <input type="submit" value="Submit" className="submitBtn" />
        <input
          type="submit"
          value="Guest Login"
          className="submitBtn"
          onClick={guestLoginHandler}
        />
      </form>

      <p>
        Don't have an account? <NavLink to="/signup">SignUp</NavLink> here.
      </p>
    </div>
  );
};
export default Login;
