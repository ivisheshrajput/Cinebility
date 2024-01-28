import React, { useRef, useState } from "react";
import Header from "./Header";
import BGImage from "../../src/assets/login-bg.jpg";
import { checkValidation } from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  //In the below code I have commented out useRef things from every where because when i am using useRef I am not able to change the fields to blank of email and password when switched to signUp or from sign up to sign in automatically although using useRef is easy

  const email = useRef(null);
  const password = useRef(null);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const displayName = useRef(null);
  const phoneNumber = useRef(null);

  const [errMessage, setErrMessage] = useState("");
  const handleClick = () => {
    setSignUp(!signUp);
    setErrMessage("");
    // setEmail("");
    // setPassword("");
    // email.current.value = ""; // clear email
    // password.current.value = ""; // clear password
    // displayName.current.value = ""; // clear displayName
  };
  const handleButtonClick = () => {
    const message = checkValidation(
      email.current?.value,
      password.current?.value
    );
    console.log(email.current.value);
    console.log(password.current.value);

    // const message = checkValidation(email, password);
    // console.log(email);
    // console.log(password);
    setErrMessage(message);
    if (message) return;

    //sign in and sign up logic

    if (!signUp) {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current?.value,
            phoneNumber: phoneNumber.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/156611608?v=4 ",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, phoneNumber, photoURL } =
                auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  phoneNumber: phoneNumber,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              console.log(user, "dhgrsghsf");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
          // ..
        });
    }
  };

  return (
    <>
      <Header />
      <img src={BGImage} alt="" className="h-screen w-screen  absolute" />
      //{" "}
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`relative z-10 w-[400px]  ${
          signUp ? "h-[480px]" : "h-[370px]"
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
            ref={displayName}
            type="username"
            className="p-2 rounded-lg my-2"
          ></input>
        ) : (
          ""
        )}
        <input
          placeholder="Email"
          ref={email}
          type="email"
          className="p-2 rounded-lg my-2"
        ></input>
        <input
          placeholder="Password"
          ref={password}
          type="password"
          className="p-2 rounded-lg my-2"
        ></input>
        {signUp ? (
          <input
            placeholder="Phone Number"
            ref={phoneNumber}
            type="phone"
            className="p-2 rounded-lg my-2"
          ></input>
        ) : (
          ""
        )}
        {signUp ? (
          <button
            className=" bg-yellow-500 p-2 rounded-lg font-semibold text-white my-2"
            onClick={handleButtonClick}
          >
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
    </>
  );
};

export default Login;
