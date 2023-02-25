import React, { useRef } from "react";
import "./register.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "https://recipeapp-backend.onrender.com/api/reg";
export const Register = () => {
  const regdata = useRef();
  const navigate = useNavigate();
  const handlereg = async (e) => {
    e.preventDefault();
    const inputdata = {
      email: regdata.current.email.value,
      password: regdata.current.password.value,
      confirmpassword: regdata.current.confirmpassword.value,
    };
    if (
      inputdata.email !== "" &&
      inputdata.password !== " " &&
      inputdata.confirmpassword !== ""
    ) {
      if (inputdata.password === inputdata.confirmpassword) {
        let response = await Axios.post(url, inputdata);
        if (response.status === 200) {
          console.log("ok");
          navigate("/login");
        }
      } else {
        alert("password and confirm password should be same");
      }
    } else {
      alert("filled must be filled");
    }
  };
  return (
    <div>
      <form id="regform" ref={regdata}>
        <h1>SignUpForm</h1>
        <input type="email" placeholder="enter ur email" id="email" />
        <input type="password" placeholder="enter ur passsword" id="password" />
        <input
          type="password"
          placeholder="confirm passsword"
          id="confirmpassword"
        />
        <button onClick={handlereg}>continue</button>
      </form>
    </div>
  );
};
