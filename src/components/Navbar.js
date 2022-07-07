import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar(props) {
  return (
    <div className="container-fluid">
        <nav className="navbar row navbar-expand-lg navbar-dark bg-dark">
            <div className="col-12">
                <a className="navbar-brand mx-auto" href="/"><img src={logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                                <a className="nav-link active sub" aria-current="page" href="index.html">INICIO</a>
                        </li>
                        <li className="nav-item ">
                                <a className="nav-link  sub" href="pages/contacto.html">CONTACTO</a>
                        </li>
                        <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="pages/productos.html" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTOS
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link className="dropdown-item" to={`/category/${props.categoria}`}>REMERAS</Link></li>
                                    <li><Link className="dropdown-item" to={`/category/${props.categoria}`}>BUZOS</Link></li>
                                    <li><Link className="dropdown-item" to={'/'}>TODOS LOS PRODUCTOS</Link></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="pages/productos/ofertas.html">OFERTAS</a></li>
                                </ul>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link sub" href="#pie">SEGUINOS</a>
                        </li>
                    </ul>
                    <div className="containerCart">
                    <form>
                        <CartWidget />
                    </form>
                    </div>
                </div>
                
            </div>

        </nav>
    </div>
  );
}

export default Navbar;
