import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar'
import { useEffect, useState } from 'react';

function App() {
  const[newImg,setNewImg]=useState(true)
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        console.log(dog)
        setImageUrl(dog.message);
        setNewImg(false)
      });
  }, [newImg]);
  const getNewImg =_=>{
    setNewImg(true)
  }
  return (
    <div>
      <header >
        <Navbar />
        <div className='mt-5 mb-3'>
          <input id="In1"></input>
          <input id="In2"></input>
        </div>
        <button id="btImg" onClick={getNewImg}>Get new image</button>
        <div id="centrar"><img className='mt-4' src={imageUrl}></img></div>
      </header>
    </div>
  )
}
  export default App;
