import './assets/styles/style.css';
import image from './assets/images/Logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={image} width="100"></img>
       <a href="./">Paw App</a>
      </header>
    </div>
  );
}

export default App;
