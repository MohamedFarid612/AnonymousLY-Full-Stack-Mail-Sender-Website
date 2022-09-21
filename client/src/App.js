import React from "react";
import axios from "axios";
import Form from "./components/form";
import Navbar from "./components/navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Success from "./pages/success";
import Failure from "./pages/failure";

function App() {

  return (
<BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact></Contact>} ></Route>
        <Route path="/success" element={<Success></Success>} ></Route>
        <Route path="/failure" element={<Failure></Failure>} ></Route>
    </Routes>
  </BrowserRouter>
  )

}
export default App;