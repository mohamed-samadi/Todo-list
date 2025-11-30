import { useState ,useEffect } from "react"
function App() {

  const [backend , setabackend] = useState([{}]) ;
      useEffect
      (() =>{
        fetch("/api")
        .then((res) => res.json())
        .then((data) => {
          setabackend(data)
          console.log(data)
        })
      } , [] ) ;

  return (
    <div>
      { backend.users ? backend.users.map((user , index) => (
        <h1 key={index}>{user}</h1>
      )) : <h1>Loading...</h1> }
    </div>
  )
}

export default App
