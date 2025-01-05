import './assets/styles/style.css';
import image from './assets/images/Logo-main.png';

function App() {
  return (
    <div className="App">
      <header>
      <img src={image} width="50"></img>
       <a href="./">Paw App</a>
      </header>
      <div class="container"> 
      <section class="menu-container">
         <div class="card gallery"><button class="btn"type="button">Gallery</button></div> 
         <div class="card breeds"><button class="btn" type="button">Breeds</button></div>
         <div class="card voting"><button class="btn" type="button">Voting</button></div> 
      </section>
      <section class="main-container">
        
      </section>
      </div>
    </div>
  );
}

export default App;
