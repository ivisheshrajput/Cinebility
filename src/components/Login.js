import React, { useRef, useState } from "react";
import Header from "./Header";
import BGImage from "../../src/assets/login-bg.jpg";
import { checkValidation } from "../utils/checkValidation";

const Login = () => {
  const [signUp, setSignUp] = useState(false);

  //In the below code I have commented out useRef things from every where because when i am using useRef I am not able to change the fields to blank of email and password when switched to signUp or from sign up to sign in automatically although using useRef is easy

  //   const email = useRef(null);
  //   const password = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMessage, setErrMessage] = useState("");
  const handleClick = () => {
    setSignUp(!signUp);
    setErrMessage("");
    setEmail("");
    setPassword("");
  };
  const handleButtonClick = () => {
    // const message = checkValidation(
    //   email.current.value,
    //   password.current.value
    // );
    // console.log(email.current.value)
    // console.log(password.current.value)
    // setErrMessage(message);

    const message = checkValidation(email, password);
    // console.log(email);
    // console.log(password);
    setErrMessage(message);
  };

  return (
    <div>
      <Header />
      <img src={BGImage} alt="" className="h-screen w-screen  absolute" />
      //{" "}
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`relative z-10 w-[400px]  ${
          signUp ? "h-[460px]" : "h-[360px]"
        } flex flex-col mx-auto  bg-black    rounded-2xl  my-36  shadow-lg   p-9 opacity-95  `}
      >
        {signUp ? (
          <h1 className="text-white font-semibold mb-3 text-3xl">Sign Up</h1>
        ) : (
          <h1 className="text-white font-semibold mb-3 text-3xl">Sign In</h1>
        )}
        {signUp ? (
          <input
            placeholder="Username"
            type="username"
            className="p-2 rounded-lg my-2"
          ></input>
        ) : (
          ""
        )}
        <input
          placeholder="Email"
          //   ref={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="p-2 rounded-lg my-2"
        ></input>
        <input
          placeholder="Password"
          //   ref={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="p-2 rounded-lg my-2"
        ></input>
        {signUp ? (
          <input
            placeholder="Phone Number"
            type="phone"
            className="p-2 rounded-lg my-2"
          ></input>
        ) : (
          ""
        )}
        {signUp ? (
          <button className=" bg-yellow-500 p-2 rounded-lg font-semibold text-white my-2">
            Sign Up
          </button>
        ) : (
          <button
            className=" bg-yellow-500 p-2 rounded-lg font-semibold text-white my-2"
            onClick={handleButtonClick}
          >
            Sign In
          </button>
        )}
        <p className="text-red-500  ">{errMessage}</p>

        {signUp ? (
          <p className="text-yellow-500 text-sm mt-2 ">
            Already Have a account? <br />
            <u className="cursor-pointer " onClick={handleClick}>
              Sign In
            </u>{" "}
            from here
          </p>
        ) : (
          <p className="text-yellow-500 text-sm mt-2 ">
            Don't have account? <br />
            <u className="cursor-pointer " onClick={handleClick}>
              Sign Up
            </u>{" "}
            from here
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
