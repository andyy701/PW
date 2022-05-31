
import {useState} from 'react'

function App() {
  const[contador,setContador]=useState(0);

  const AumentarCont =_=>{
     setContador(contador+1);
  }
  const DisminuirCont =_=>{
     setContador(contador-1);
  }

  return (
    <div>
      <button onClick={DisminuirCont}>-</button>
      <span>{contador}</span>
      <button onClick={AumentarCont}>+</button>
    </div>
  );
}

export default App;
