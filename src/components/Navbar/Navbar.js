import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
  return (
    <div className="container-fluid">
        <nav className="navbar row navbar-expand-lg navbar-dark bg-dark">
            <div className="col-12">
                <Link className="navbar-brand mx-auto" to="/"><img src={logo} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                                <Link className="nav-link active sub" aria-current="page" to="/">INICIO</Link>
                        </li>
                        <li className="nav-item ">
                                <Link className="nav-link  sub" to="/">CONTACTO</Link>
                        </li>
                        <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTOS
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link className="dropdown-item" to={`/category/Remera`}>REMERAS</Link></li>
                                    <li><Link className="dropdown-item" to={`/category/Buzo`}>BUZOS</Link></li>
                                    <li><Link className="dropdown-item" to={'/'}>TODOS LOS PRODUCTOS</Link></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="dropdown-item" to="/">OFERTAS</Link></li>
                                </ul>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link sub" to="/">SEGUINOS</Link>
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
