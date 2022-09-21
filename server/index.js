require('dotenv').config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
app.use(express.json());
var cors = require('cors')
app.use(cors())
const port = 5000;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

app.post("/send", (req, res) => {
    console.log(req);
    var mailOptions = {
        from: process.env.EMAIL,
        to: req.body.mail,
        subject: 'Anonymous-LY ❤️',
        text: req.body.msg
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send("failure");

        } else {
           // console.log('Email sent: ' + info.response);
           res.send("success");
        }
    });

});

app.post("/test", (req, res) => { console.log(req.body.mail + " " + req.body.msg);  });
app.get("/test", (req, res) => { console.log("hena");res.send("habiby a7amo"); });
app.listen(port, () => { console.log("server started") });




























