import React from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Form() {

    var [info, setinfo] = React.useState({
        mail: "",
        msg: ""
    });

    function resetInfo(event) {

        const { name: myname, value: myvalue } = event.target;
        setinfo((prev) => {
            if (myname === "email") {
                return {
                    mail: myvalue,
                    msg: prev.msg
                };
            }
            else {
                return {
                    mail: prev.mail,
                    msg: myvalue
                };
            }

        }
        );
    }
    function submit(event) {

        event.preventDefault();
        axios.post('http://localhost:5000/send', info)
            .then(function (response) {
                if (response.data == "success")
                    window.location = "/success";
                else window.location = "/failure";
            })
            .catch(function (error) {
                window.location = "/failure";
            });

        // axios.get('http://localhost:5000/test')
        // .then(function (response) {
        //   // handle success
        //   if(response.status=="200")
        //   console.log("sa7 el sa7");
        // })
        // .catch(function (error) {
        //   // handle error
        //   console.log(error);
        // })
        // .then(function () {
        //   // always executed
        // });
    }

    return (
        <div className="big trans">
            <form>

                <img className="mb-4" src="https://media4.giphy.com/media/5axRZ5SMhky9Kj60xk/200w.webp?cid=ecf05e47puw8b7s6huhwstu5hxmb0y7hkeligl3evd052xru&rid=200w.webp&ct=s" alt="" width="72" height="57"></img>
                <h1 className="h3 mb-3 fw-normal wh word">Spread love 🤍 across the world!!</h1>

                <div className="form-floating trans">
                    <input type="email" className="wd" name="email" id="floatingInput" placeHolder="Type his/her email! " onChange={resetInfo} value={info.mail}></input>
                    {/* <label for="floatingInput" className="wh">Email address</label> */}
                </div>
                <div class="form-floating trans">
                    <textarea className="wd " name="message" cols="50" rows="5" placeHolder="Type here your loving msg!" onChange={resetInfo} value={info.msg}></textarea>
                    {/* <label for="floatingPassword" className="wh">type your message</label> */}
                </div>
                <button className="wd" onClick={submit}>send</button>
                <p class="mt-5 mb-3 text-muted">&copy; Mohamed Farid</p>
            </form>
        </div>
    )
}
export default Form;