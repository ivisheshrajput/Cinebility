import React from "react";
import NameLogo from "../assets/Cinebility-Block.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
      {user && (
        <div className="flex space-x-5 mr-4 ">
          {" "}
          <img
            src={user?.photoURL}
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
      )}
    </div>
  );
};

export default Header;
