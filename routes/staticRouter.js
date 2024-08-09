const express = require("express");
const Message = require("../models/message");
const nodemailer = require("nodemailer");
const session = require("express-session");
const path = require("path");

const router = express.Router();

// const transPorter = nodemailer.createTransport(
//     {
//         service: "gmail",
//         auth: {
//             user: "rajeevprajapat43@gmail.com",
//             pass: "6378952948"
//         }
//     });

router.get("/", (req, res) => {
    const msg = req.session.message;
    req.session.message = null;
    return res.render('index',{
        msg
    });
})

router.post("/contactMessage", async (req, res) => {
    const body = req.body;
    try {
        if (!body.name || !body.email || !body.message){
            req.session.message = "Please, fill all the fields";
            return res.status(400).redirect("/");
        } 

        await Message.create({
            name: body.name,
            email: body.email,
            message: body.message
        });

        // const mailOption = {
        //     from: "rajeevprajapat43@gmail.com",
        //     to: body.email,
        //     subject: "Sending Email using Node.js",
        //     text: "this is the mail"
        // }

        // transPorter.sendMail(mailOption, (err, info) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     else {
        //         console.log("Email sent: " + info.response);
        //     }
        // })
        
        req.session.message = "Message sent successfully";

        return res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})

router.get("/ResumeDownload",(req,res)=>{
    const file = path.resolve("./public","files","RajeevPrajapatResume.pdf");
    res.download(file);
})

module.exports = router;