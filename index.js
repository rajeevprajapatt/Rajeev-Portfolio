const express = require("express");
const path = require("path");
const staticRouter = require("./routes/staticRouter");
const mongoConnect = require("./connection");
const session = require("express-session");
const uri = "mongodb+srv://rajeevprajapat06:Rajeev%4063789@Fashion-View.jr5jy.mongodb.net/RajeevPortfolioEmails?retryWrites=true&w=majority";

// console.log("my name is ",process.env.);
const app = express();
const PORT = process.env.PORT || 8000;
const Url = "mongodb://127.0.0.1:27017/Portfolio";
// const Url = process.env.MONGO_URL;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));
// "mongodb://127.0.0.1:27017/Portfolio"
mongoConnect(uri).then(() => {
    console.log("Mongo Connect Successfully");
})

app.use(session({
    secret: '$Rajeev007$',
    resave: false,
    saveUninitialized: true,
}));

app.use("/", staticRouter);

app.listen(PORT, () => {
    console.log(`Server running on PORT No. ${PORT}`);
})