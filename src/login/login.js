import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const url = "https://recipeapp-backend.onrender.com/api/login";
export const Login = () => {
  const regdata = useRef();
  const navigate = useNavigate();
  let handlelogin = async (e) => {
    e.preventDefault();
    const inputdata = {
      email: regdata.current.email.value,
      password: regdata.current.password.value,
    };
    if (inputdata.email !== "" && inputdata.password !== " ") {
      let response = await Axios.post(url, inputdata);
      if (response.status === 200) {
        console.log("ok");
        let token = response.data.data;
        window.localStorage.setItem("token", token);
        navigate("/homepage");
      }
    } else {
      alert("filled must be filled");
    }
  };
  return (
    <div>
      <form id="regform" ref={regdata}>
        <h1>SignIn</h1>
        <input type="email" placeholder="enter ur email" id="email" />
        <input type="password" placeholder="enter ur passsword" id="password" />
        <button onClick={handlelogin}>Submit</button>
      </form>
    </div>
  );
};
