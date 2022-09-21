import React from "react";
import Navbar from "../components/navbar";
import Form from "../components/form";

function Failure() {

function redirect()
{
    window.location="/";
}

    return (
        <div className="trans">
            <Navbar />

            <div className="big trans">

                <h1 className="h3 mb-3 fw-normal wh word">PROCESS FAILED</h1>
                <p className="wh word">please type a valid email ! </p>
                <button className="wd"  onClick={redirect}>RETRY 🤍</button>
            </div>
        </div>)

}

export default Failure;