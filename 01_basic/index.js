console.log("Ketan joshi");
require('dotenv').config()
const express = require("express")
// import express from "express";
const app = express();
const port = 4000
console.log(typeof(app.listen()));

app.get('/',(req,res) => {
     res.send('Hello world!!')
})

app.get('/twitter', (req, res) => {
     res.send("ketan");
})
app.get('/login', ( req,res ) => {
     res.send('<h1>Logged In</h1>')
})
app.get('/youtube' , (req,res) => {
     res.send('<h2>Youtube This Is</h2>')
})
app.listen(process.env.PORT, () => {
     console.log(`Example app listening on port ${port}`)
})
























