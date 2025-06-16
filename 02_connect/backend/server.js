import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.static('dist'))
// app.get('/list', (req, res)=>{
//      res.send("KKKKK");
// })
const jokes = [
     {
          "id":1,
          "title":"Joke 1",
          "content": "This is joke 1"
     },
     {
          "id":2,
          "title":"Joke 2",
          "content": "This is joke 2"
     },
     {
          "id":3,
          "title":"Joke 3",
          "content": "This is joke 3"
     },
     {
          "id":4,
          "title":"Joke 4",
          "content": "This is joke 4"
     }
]
// app.get('/',(req,res)=>{
//      res.send('<a href="http://localhost:3000/jokes">This is anchor tag</a>')
// })
app.get('/jokes',(req,res)=>{
     res.send(jokes);
})
app.listen(PORT, ()=>{
     console.log(`app is listening at ${PORT}`)
})