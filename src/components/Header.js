import React from "react";
import NameLogo from "../assets/Cinebility-Block.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error ");
      });
  };
  return (
    <div className="fixed z-50 p-5 flex justify-between w-screen bg-gradient-to-b from-black    ">
      <div>
        {" "}
        <img src={NameLogo} alt="" className="w-52  " />
      </div>

      <div className="flex space-x-5 mr-4 ">
        {" "}
        <img
          src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=1380&t=st=1706465253~exp=1706465853~hmac=d5112258039dcba439f480f39e6710ffb496d50cdbd4d23ab7b10382a8f6ab20"
          alt="user image"
          className="w-12 rounded-full shadow-md border border-yellow-500 "
        />
        <button
          onClick={handleSignOut}
          className="bg-yellow-500 hover:shadow-2xl   border border-yellow-500 rounded-md font-semibold text-white  pl-3 pr-3 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
