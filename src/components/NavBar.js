import logo from '../logo.svg';

const NavBar = () => {
    return (
        <nav className= "menu">
            <ul className="navbar-nav col-tentate">
                        <li className="nav-item">
                            <img className="navLogo" src={logo} alt="logo" />
                        </li>
                        <li className="nav-item">
                            <a href="#" id="inicio">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">GALERIA</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">PUNTOS DE VENTA</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">CONTACTO</a>
                        </li>
                </ul>
        </nav>
    )
}

export default NavBar;