import sad from '../assets/images/smiley-sad.svg';
import smiley from '../assets/images/smiley.svg';
import heart from '../assets/images/heart.svg';

function Navigation () {
    return (<div className="navigation">
    <form className="search">
    <input type="text" placeholder="Search for breeds"></input>
    <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg></button>
    </form>
    <nav className="nav-icons">
      <ul>
        <li><a href="#"><img className="sad" src={sad}/></a></li>
        <li><a href="#"><img className="smiley" src={smiley}/></a></li>
        <li><a href="#"><img className="heart" src={heart}/></a></li>
      </ul>
    </nav>
  </div>)
}

export default Navigation;