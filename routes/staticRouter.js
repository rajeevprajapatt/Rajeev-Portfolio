const express = require("express");
const Message = require("../models/message");
const nodemailer = require("nodemailer");
const session = require("express-session");
const path = require("path");

const router = express.Router();

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
        req.session.message = "Message sent successfully";

        return res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})

router.get("/ResumeDownload",(req,res)=>{
    const file = path.resolve("./public","files","Rajeev Prajapat Resume.pdf");
    res.download(file);
})

module.exports = router;