import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const Greeting =_=>{
  return(
    <h2>hola</h2>
  )
}

const Greeting1 =(props)=>{
  let name=props.name;
  return(
    <h2>hola {name}</h2>
  )
}
const Greeting2 =({name,city})=>{
  return(
    <h2>hola {name} saludos desde {city}</h2>
  )
}


const ClickCounter =_=>{
  const[clickCount,setClickCount]=useState(0);

  const aumentar=_=>setClickCount(clickCount+1);
  //setClickCount(clickCount+1);
  return(
    <div>
      <div>{clickCount}
      </div>
      <button onClick={aumentar}>aumentar</button>
    </div>
  );

 
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting/>
        <Greeting1 name="Mariana"/>
        <Greeting2 name="Alejandra" city="Chiclayo"/>
        <ClickCounter/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
