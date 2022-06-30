import ItemCount from '../ItemCount';
import './Item.css';

function Item(props) {
    return (
        <div className='card'>
            <img src={props.imagen} alt="banner1" />
            <h4>{props.product}</h4>
            <p>{props.price}</p>
            <button>Detalle</button>
            <ItemCount stock={props.stock} />
        </div>
    );
}

export default Item;    