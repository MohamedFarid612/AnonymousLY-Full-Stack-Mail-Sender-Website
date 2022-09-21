import React from "react";
import { Link } from "react-router-dom"
import Navbar from "../components/navbar";
import Form from "../components/form";
function Success() {
    function redirect() {
        window.location = "/";
    }

    return (
        <div className="trans">
        <Navbar />

        <div className="big trans">

            <h1 className="h3 mb-3 fw-normal wh word">PROCESS SUCCEEDED , THANK YOU.</h1>
            <button className="wd"  onClick={redirect}>RETRY 🤍</button>
        </div>
    </div>
    )

}
export default Success;