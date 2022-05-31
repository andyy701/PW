                    import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <header className="App-header">
        <Navbar/>     
        <Main/>
      </header>
    </div>
  );
}

export default App;
