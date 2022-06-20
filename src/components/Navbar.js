import logo from './assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <header>
         <nav>
            <div>
                <a href="index.html">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <ul class="menu">
                <li>
                    <a href="index.html">inicio</a>
                </li>
                <li><a href="">productos</a>
                    <ul class="subMenu">
                        <li>
                            <a href="">remeras</a>
                        </li>
                        <li>
                            <a href="">musculosas</a>
                        </li>
                        <li>
                            <a href="">ofertas</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="">nosotros</a>
                </li>
                <li>
                    <a href="">contacto</a>
                </li>
                <li>
                    <a href="#pie">seguinos</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;
