import image from '../assets/images/Logo-main.png';

function Header (){
    return (<header>
        <img src={image} width="50"></img>
         <a href="./">Paw App</a>
        </header>);
}

export default Header;