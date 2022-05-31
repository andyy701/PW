import {useState} from 'react';

function App() {
  const[datos,setDatos]=useState({nombre:     '',
                                  apellido:   '',
                                  email:      '',
                                  comentarios:'',
                                  amistoso:   '',
                                  empTiempo:  '',
                                  color:''
                                  });
  
  const cambiarDatos=event=>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }
  const mostrarDatos =event=>{
    event.preventDefault()
    console.log("Datos:"+datos.nombre+" "+
                         datos.apellido+" "+
                         datos.email+" "+
                         datos.comentarios+" "+
                         datos.amistoso+" "+
                         datos.empTiempo+" "+
                         datos.color
                         );
  }
  return (
    <div>
     <form onSubmit={mostrarDatos}>
      <input className="" onChange={cambiarDatos} name="nombre" placeholder='First Name'></input><br></br>
      <input className="mt-2" onChange={cambiarDatos} name="apellido" placeholder='Last Name'></input><br></br>
      <input className="mt-2" onChange={cambiarDatos} name="email" placeholder='Email'></input><br></br>
      <textarea className="mt-2" onChange={cambiarDatos} name="comentarios" placeholder='Comments'></textarea><br></br>
      
      <input type="checkbox" onChange={cambiarDatos} name="amistoso"></input><span>Are you friendly?</span><br></br>
      
      <span className='mt-2'> Current employment status</span><br></br>
      <div className='mb-2' onChange={cambiarDatos} name="empTiempo">
        <input type="radio" value="Unemployed" name="empTiempo"></input><span>Unemployed</span><br></br>
        <input type="radio" value="Part-time" name="empTiempo"></input><span>Part-time</span><br></br>
        <input type="radio" value="Full-time" name="empTiempo"></input><span>Full-time</span><br></br>
      </div>  
      
      <div>What is your favorite color?</div>
      <select onChange={cambiarDatos} name="color">
         <option value="Red">Red</option>
         <option value="Orange">Orange</option>
         <option value="Yellow">Yellow</option>
      </select>
      <br></br>
      
      <button className="mt-4" >Submit</button>
     </form>
    </div>
  );
}

export default App;
