import Header from "./components/Header/Header";
import Guns from "./components/Guns/Guns";
import { useState } from "react";
function App() {
  const [count,setCount]= useState([0])
  const cartCount =()=>{
    const newCount = parseInt(count +1)
    setCount(newCount)
  }
  return (

    <div className="App">
      <Header count={count}></Header>
      <Guns cartCount ={cartCount}></Guns>
    </div>
  );
}

export default App;
