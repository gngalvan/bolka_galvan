import './Main.css';
import remera1 from './assets/remeras.jpg';
import remera2 from './assets/remeras2.jpg';
import remera3 from './assets/remeras3.jpg';

function Main() {
  return (
    <main className="mainInicio">
               <h1>Productos destacados</h1>
               <div className="contenedorProducto">
                    <div class="productoInicio">
                         <h5>remera</h5>
                         <img src={remera1} alt="" />
                         <p>descripcion</p>
                         <button>comprar</button>
                    </div>
               </div>
               <div className="contenedorProducto2">
                    <div className="productoInicio">
                         <h5>remera</h5>
                         <img src={remera2} alt="" />
                         <p>descripcion</p>
                         <button>comprar</button>
                    </div>
               </div>
               <div className="contenedorProducto3">
                    <div className="productoInicio">
                         <h5>remera</h5>
                         <img src={remera3} alt="" />
                         <p>descripcion</p>
                         <button>comprar</button>
                    </div>
               </div>
               <div className="slider">
                    <ul>
                         <li>
                              <img src="img/remeras.jpg" alt="" />
                         </li>
                         <li>
                              <img src="img/remeras2.jpg" alt="" />
                         </li>
                         <li>
                              <img src="img/remeras3.jpg" alt="" />
                         </li>
                         <li>
                              <img src="img/remeras4.jpg" alt="" />
                         </li>
                    </ul>
               </div>
          </main>

  );
}

export default Main;