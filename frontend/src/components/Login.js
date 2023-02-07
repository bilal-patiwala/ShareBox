// import React from 'react'
import "./Login.css";
import React, { useContext, useState } from "react";
import svg from "../assets/first.svg";
import svg1 from "../assets/second.svg";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    let{loginUser} = useContext(AuthContext)
  const loginSubmit = (event) => {
    if(username !== "" && password !== ""){
        loginUser(event)
    }
  }
  return (
      <div className="mainBody">
        <div className="grid justify-center items-center pt-16">
          <div className="loginDiv">
            <div className="font-AlbertSans text-center header pt-6">
              ShareBox Login
            </div>
            <div className="inputBox font-AlbertSans" style={{height:'380px'}}>
              <form className="mt-4" onSubmit={loginSubmit}>
                <div>
                  <div className="py-2 px-2">
                    <label htmlFor="username" className="font-bold px-2">
                      Username <span className="text-red-700">*</span>
                    </label>
                  </div>
                  <div className="inputField px-2">
                    <input
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      className="bg-slate-300"
                      type="text"
                      required
                      name="username"
                      value={username}
                    />
                  </div>
                </div>
                <div>
                  <div className="py-2 px-2">
                    <label htmlFor="password" className="font-bold px-2">
                      Password <span className="text-red-700">*</span>
                    </label>
                  </div>
                  <div className="inputField px-2">
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="bg-slate-300"
                      type="text"
                      required
                      name="password"
                      value={password}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="mx-4 mt-8 loginBtn">
                    Login
                  </button>
                </div>
                <div className="mt-4 text-center">
                  Don't have an account ?
                  <Link className="text-blue-600 hover:underline" to="/Signup">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
  );
};

export default Login;
