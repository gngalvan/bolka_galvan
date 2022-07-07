import './ItemDetail.css';
import ItemCount from './ItemCount';

function ItemDetail(props) {
    return (
        <div className='detail'>
            <img src={props.imagen} alt={`${props.id}-${props.nombre}`} />
            <h4>{props.nombre}</h4>
            <span>{props.descripcion}</span>
            <p>{`$${props.precio}`}</p>
            <ItemCount stock={props.stock} />
        </div>
    );
}

export default ItemDetail;   