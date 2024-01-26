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

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
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
