import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes,setJokes] = useState([{"id":1,"title":"Joke-1","content":"This is joke 1"}]);
  useEffect(()=>{
      axios.get('/jokes')
      .then((res)=>{
        setJokes(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  })
  const divs = jokes.map((ele,idx)=>(
    <div key={idx}>
      <p>{ele.id}</p>
      <p>{ele.title}</p>
      <p>{ele.content}</p>
    </div>
  ))
  return (
    <>
        <h3>JOKES HERE !!!</h3>
        { 
          divs
        }
        {
          // jokes.map((ele,idx)=>(
          //   <div key={idx}>
          //     <p>{ele.id}</p>
          //     <p>{ele.title}</p>
          //     <p>{ele.content}</p>
          //   </div>
          // ))
        }
    </>
  )
}

export default App
