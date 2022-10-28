import React, { useState, useEffect } from 'react'
import '../style.css'

const HomePage = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      console.log(posts)
  }, [])

  




  return (
    <div>
      <h1>HomePage</h1>
    </div>
  )
}

export default HomePage
