import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css'

const App = ()=>{
  const APP_ID='dc34792b';
  const APP_KEY='3eab1a651f78f58e8b394f905f3efa21';

  const[search,setSearch]=useState('')
  const[dishes,setDishes]=useState([])
  const[query,setquery]=useState('chicken')
  useEffect(()=>{
     
    async function getData(){
      const res= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const response=await res.json()
      setDishes(response.hits)
    }
    getData()
  },[query])

  const submitHandler = e =>{
    e.preventDefault()
    setquery(search)
    setSearch('')
  }

  return <div className="App">
  <form onSubmit={submitHandler} className="search-form">
    <input type="text" onChange={e => setSearch(e.target.value)} value={search} className="search-bar"/>
    <button type="submit" className="search-button">Search</button>
  </form>
  <div className="recipes">
  {dishes.map((item,idx)=> <Recipe recipelist={item} key={idx}/>)  }

  </div>
  
  </div>
}
export default App