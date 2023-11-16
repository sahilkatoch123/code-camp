import React, { useState, useEffect } from 'react'

export default function Best() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7f310ace')
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [])
  console.log(user)
  return (
    <div>
      
  {Object.entries(user).map(([key,value,index]) => {
    return (
       <div key={index}>{key} : {value.toString()}</div>
    )
 })}      
      
      {/* {user.entries(user)} */}
    </div>)
}
