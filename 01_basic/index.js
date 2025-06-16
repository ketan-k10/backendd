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
const obj = {
     "login": "ketan-k10",
     "id": 152807483,
     "node_id": "U_kgDOCRuoOw",
     "avatar_url": "https://avatars.githubusercontent.com/u/152807483?v=4",
     "gravatar_id": "",
     "url": "https://api.github.com/users/ketan-k10",
     "html_url": "https://github.com/ketan-k10",
     "followers_url": "https://api.github.com/users/ketan-k10/followers",
     "following_url": "https://api.github.com/users/ketan-k10/following{/other_user}",
     "gists_url": "https://api.github.com/users/ketan-k10/gists{/gist_id}",
     "starred_url": "https://api.github.com/users/ketan-k10/starred{/owner}{/repo}",
     "subscriptions_url": "https://api.github.com/users/ketan-k10/subscriptions",
     "organizations_url": "https://api.github.com/users/ketan-k10/orgs",
     "repos_url": "https://api.github.com/users/ketan-k10/repos",
     "events_url": "https://api.github.com/users/ketan-k10/events{/privacy}",
     "received_events_url": "https://api.github.com/users/ketan-k10/received_events",
     "type": "User",
     "user_view_type": "public",
     "site_admin": false,
     "name": "Ketan Joshi",
     "company": null,
     "blog": "",
     "location": "India",
     "email": null,
     "hireable": null,
     "bio": null,
     "twitter_username": null,
     "public_repos": 18,
     "public_gists": 0,
     "followers": 0,
     "following": 0,
     "created_at": "2023-12-03T18:07:34Z",
     "updated_at": "2025-06-16T15:49:30Z"
   }
app.get('/twitter', (req, res) => {
     res.send("ketan");
})
app.get('/login', ( req,res ) => {
     res.send('<h1>Logged In</h1>')
})
app.get('/youtube' , (req,res) => {
     res.send('<h2>Youtube This Is</h2>')
})
app.get('/github',(req,res) => {
     res.send(obj);
})
app.listen(process.env.PORT, () => {
     console.log(`Example app listening on port ${process.env.PORT}`)
})
























