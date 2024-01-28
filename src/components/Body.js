// import React from 'react';
// import RouterProvider, {createBrowserRouter} from "react-router-dom";
// import Login from './Login';
// import Browse from './Browse';

// const Body = () => {
//     const appRouter = createBrowserRouter([
//         {
//             path: "/",
//             element: <Login />
//         },
//         {
//             path: "/browse",
//             element: <Browse />
//         }
//         // {
//         //     path: "/",
//         //     element:
//         // }
//     ])

//     return (
//         <div>
//             <RouterProvider router={appRouter} />
//         </div>
//     )
// }

// export default Body;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();
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
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Router>
  );
};

export default Body;
