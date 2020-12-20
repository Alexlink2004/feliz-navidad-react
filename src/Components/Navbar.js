import './Styles/Navbar.css';

import fav from '../Assets/favicon.jpg'

export default function Navbar (props){
    return(
        <nav className="navbar navbar-dark bg-primary nav" id="navbarColor01">
            <img src={fav} width='50px' className='navbar-brand icon' alt='favicon'/>
            <h1>Pagina oficial de la paula jsjs okno</h1>
        </nav>
    );
}