import React from 'react'
import Section1 from "./components/section1/section1.jsx"

const App = () => {

  const users=[
    {
      img : 'https://imgs.search.brave.com/XtSROOMFpOlalRimdcwDFmUgNXjxzP8kKRQ88krxhN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5LzFk/L2I2L2Q5MWRiNjIx/NDk1MGM4MWJhYzVh/OWUxNDI1NWZlZWIw/LmpwZw',
      intro : "dsfsaf",
      tag : "yo"
    },
    {
      img : 'https://imgs.search.brave.com/XtSROOMFpOlalRimdcwDFmUgNXjxzP8kKRQ88krxhN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5LzFk/L2I2L2Q5MWRiNjIx/NDk1MGM4MWJhYzVh/OWUxNDI1NWZlZWIw/LmpwZw',
      intro : "dsfsaf",
      tag : "hi"
    },
    {
      img : 'https://imgs.search.brave.com/XtSROOMFpOlalRimdcwDFmUgNXjxzP8kKRQ88krxhN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5LzFk/L2I2L2Q5MWRiNjIx/NDk1MGM4MWJhYzVh/OWUxNDI1NWZlZWIw/LmpwZw',
      intro : "dsfsaf",
      tag : "ahsuidu"
    }
  ]

  return (
    <div>
      <Section1 user={users}/>
    </div>
  )
}

export default App
