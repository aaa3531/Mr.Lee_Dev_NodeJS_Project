import express from "express";

const app = express();

app.set('view engine', "pug");
app.set("views", __dirname + "/src/views");

app.get("/", (req, res) => res.render("home"));


const handleListen = () as console.log
app.listen(3000, handleListen);

console.log("hello");

console.log("hello");