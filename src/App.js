import './assets/styles/style.css';
import image from './assets/images/Logo-main.png';
import sad from './assets/images/smiley-sad.svg';
import smiley from './assets/images/smiley.svg';
import heart from './assets/images/heart.svg';

function App() {
  return (
    <div className="App">
      <div className="container"> 
      <header>
      <img src={image} width="50"></img>
       <a href="./">Paw App</a>
      </header>
      
      <section className="menu-container">
         <div className="card gallery"><button className="btn"type="button">Gallery</button></div> 
         <div className="card breeds"><button className="btn" type="button">Breeds</button></div>
         <div className="card voting"><button className="btn" type="button">Voting</button></div> 
      </section>
      <div className="navigation">
        <input type="text" placeholder="Search for breeds"/>
        <div className="nav-icons">
          <img className="sad" src={sad}/>
          <img className="smiley" src={smiley}/>
          <img className="heart" src={heart}/>
        </div>
      </div>
      <section className="main-container">   
      </section>
      </div>
    </div>
  );
}

export default App;
