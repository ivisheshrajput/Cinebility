import React, { useEffect } from "react";
import NameLogo from "../assets/Cinebility-Block.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, phoneNumber, photoURL } = user;
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
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //removed because doing routing from header only
        // navigate("/");
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
        <div className="space-x-5 mr-4 flex">
          {" "}
          <span>
            {" "}
            <img
              src={user?.photoURL}
              alt="user image"
              className="w-12 rounded-full shadow-md border border-customColorBase  "
            />
          </span>
          <span>
            {" "}
            <button
              onClick={handleSignOut}
              className="border border-customColorBase  bg-customColorBase  mt-2 font-semibold p-1 px-2 hover:bg-customColorDark  rounded-md text-white"
            >
              Logout
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
