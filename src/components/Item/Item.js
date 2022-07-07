import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './Item.css';

function Item(props) {
    return (
        <Link to={`/item/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className='card'>
            <img src={props.imagen} alt={`${props.id}-${props.product}`} />
            <h4>{props.product}</h4>
            <p>{props.price}</p>
            <Link to={`/item/${props.id}`}>
                <button>Detalle</button>
            </Link>
            <ItemCount stock={props.stock} />
        </div>
        </Link>
    );
}

export default Item;    