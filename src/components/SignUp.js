import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    displayName: "",
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
    if (!formData.displayName || !formData.email || !formData.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: formData.displayName
        });

        toast.success(`Account successfully created!`, {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-moveTask"
        });
        navigate("/home");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <div className="signup-container">
        <h3>Create account</h3>
        <form onSubmit={submitHandler}>
          <div className="input">
            <label>Display Name:</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={changeHandler}
              placeholder="Enter display name"
              required
            />
          </div>
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
        </form>
        <p>
          Already have account? <NavLink to="/login">LogIn</NavLink> here.
        </p>
      </div>
    </>
  );
};
export default SignUp;
