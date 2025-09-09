import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import App from "./app";
import { Provider as ChakraProvider } from "./components/ui/provider";
import Head from "./component/Head";
import Main from "./component/Main";
import Question from "./component/Question";
import Selectquestion from "./component/Selectquestion";
import Allquestion from "./component/AllQuestion";
import Menubar from "./component/Menubar";

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <ChakraProvider>
//     <BrowserRouter>
//       <Routes>  
//           <Route path= '/'  element={<Menubar />} />
//           <Route path="/main" element={<Main />} />
//           <Route path="/head" element={<Head />} />
//           <Route path="/question" element={<Question />} />
//           <Route path="/allquestion" element={<Allquestion />} />
//        <Route path="/selectquestion" element={<Selectquestion />} />   
//       </Routes>
//     </BrowserRouter>
//   </ChakraProvider>
// );


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/head",
        element: <Head />,

      },
      {
        path: "/allquestion",
        element: <Allquestion />,
      },

      {
        path: "/question",
        element: <Question />,
      },

      {
        path: "/selectquestion",
        element: <Selectquestion/>,
      }



    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
