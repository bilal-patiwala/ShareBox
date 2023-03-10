// import React from "react";
import "./Signin.css";
import "./Login.css";
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import svg from "../assets/first.svg";
import svg1 from "../assets/second.svg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let { signupUser } = useContext(AuthContext);
  const signupSubmit = (event) => {
    console.log("hello");
    if (username !== "" && email !== "" && password !== "") {
      signupUser(event);
    } else {
    }
  };
  return (
 
    
      <div className="mainBody">
        <div className="grid justify-center items-center">
          <div className="loginDiv">
            <div className="font-AlbertSans text-center header pt-6">
              ShareBox Signin
            </div>
            <div className="inputBox1 flex justify-center font-AlbertSans">
              <form className="mt-4" onSubmit={signupSubmit} style={{width:'70%', margin:'auto'}}>
                <div>
                  <div className="py-2 px-2">
                    <label htmlFor="username" className="font-bold px-2">
                      Username <span className="text-red-700">*</span>
                    </label>
                  </div>
                  <div className="inputField px-2">
                    <input
                      onChange={(e) => setUsername(e.target.value)}
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
                    <label htmlFor="email" className="font-bold px-2">
                      Email <span className="text-red-700">*</span>
                    </label>
                  </div>
                  <div className="inputField px-2">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="bg-slate-300"
                      type="text"
                      required
                      name="email"
                      value={email}
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
                      type="password"
                      required
                      name="password"
                      value={password}
                    />
                  </div>
                </div>
                <div>
                  <div className="py-2 px-2">
                    <label
                      htmlFor="confirm-password"
                      className="font-bold px-2"
                    >
                      Confirm Password <span className="text-red-700">*</span>
                    </label>
                  </div>
                  <div className="inputField px-2">
                    <input
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      className="bg-slate-300"
                      type="password"
                      required
                      name="confirmPassword"
                      value={confirmPassword}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="mx-4 mt-8 signInBtn">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

     

  );
};

export default Signup;
