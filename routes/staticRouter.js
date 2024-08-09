const express = require("express");
const Message = require("../models/message");

const router = express.Router();

router.get("/", (req, res) => {
    return res.render('index');
})

router.post("/contactMessage", async (req, res) => {
    const body = req.body;
    try {
        if (!body.name || !body.email || !body.message) return res.status(400).render("index", {
            msg: "Please, fill all the fields"
        });

        await Message.create({
            name: body.name,
            email: body.email,
            message: body.message
        });

        return res.render("index", {
            msg: "Message sent successfully"
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;