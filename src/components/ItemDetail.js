import './ItemDetail.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail(props) {
    
    return (
        <div className='detail'>
            <img src={`/${props.imagen}`} alt={`${props.id}-${props.nombre}`} />
            <h4>{props.nombre}</h4>
            <span>{props.descripcion}</span>
            <p className='precio'>{`$${props.precio}`}</p>
            <ItemCount stock={props.stock} />
            <Link to={`/cart`}><button className="agregar">Terminar compra</button></Link>
        </div>
    );
}

export default ItemDetail;   