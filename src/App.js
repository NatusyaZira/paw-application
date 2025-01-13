import './assets/styles/style.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="container"> 
      <Header/>
      <aside className="menu-container ">
         <Card className = "gallery" description = "Gallery"/>
         <Card className = "breeds" description = "Breeds"/>
         <Card className = "voting" description = "Voting"/>
      </aside>
      
      <main className="default main-container">  
      {/* <Navigation/> */}
        {/* <form className="sort-bar">
          <button className="back"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg></button>
          <label for="breeds">BREEDS</label>
            <select className="opt-breed" name="" id="breeds">
            <option value="1">All breeds</option>
            <option value="2">curdiuck1</option>
            <option value="3">curdiuck2</option>
            </select> 
            <select className="limitation" name="" id="breeds">
            <option value="1">Limit: 5</option>
            <option value="2">Limit: 10</option>
            <option value="3">Limit: 15</option>
            <option value="4">Limit: 20</option>
            </select> 
            <button className="sort-btn up" ><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="m16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-304h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0 -22.62 0l-80 96c-10.04 10.05-2.91 27.31 11.31 27.31zm400 128h-128a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45a32 32 0 0 0 -10.74 23.92v17.63a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16h-56l61.26-70.45a32 32 0 0 0 10.74-23.92v-17.63a16 16 0 0 0 -16-16zm31.06-85.38-59.27-160a16 16 0 0 0 -15.07-10.62h-41.44a16 16 0 0 0 -15.07 10.62l-59.27 160a16 16 0 0 0 15.06 21.38h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92a16 16 0 0 0 15.27 11.08h24.84a16 16 0 0 0 15.06-21.38zm-111.45-58.62 16.39-48 16.39 48z"/></svg></button>
            <button className="sort-btn down"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="m176 352h-48v-304a16 16 0 0 0 -16-16h-32a16 16 0 0 0 -16 16v304h-48c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96c10.02-10.05 2.89-27.31-11.33-27.31zm112-128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16h-56l61.26-70.45a32 32 0 0 0 10.74-23.92v-17.63a16 16 0 0 0 -16-16h-128a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45a32 32 0 0 0 -10.74 23.92v17.63a16 16 0 0 0 16 16zm159.06 234.62-59.27-160a16 16 0 0 0 -15.07-10.62h-41.44a16 16 0 0 0 -15.07 10.62l-59.27 160a16 16 0 0 0 15.06 21.38h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92a16 16 0 0 0 15.27 11.08h24.84a16 16 0 0 0 15.06-21.38zm-111.45-58.62 16.39-48 16.39 48z"/></svg></button>
        </form> */}
      </main>
      </div>
    </div>
  );
}

export default App;
