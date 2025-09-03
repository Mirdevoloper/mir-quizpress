import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,  Routes } from "react-router";
import App from "./app";
import { Provider as ChakraProvider } from "./components/ui/provider";
import Head from "./component/Head";
import Main from "./component/Main";
import Question from "./component/Question";
import Selectquestion from "./component/Selectquestion";
import Allquestion from "./component/AllQuestion";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>  
          
          <Route path="/main" element={<Main />} />
          <Route path="/head" element={<Head />} />
          <Route path="/question" element={<Question />} />
          <Route path="/allquestion" element={<Allquestion />} />
       <Route path="/selectquestion" element={<Selectquestion />} />   
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
