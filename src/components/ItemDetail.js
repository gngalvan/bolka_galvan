import './ItemDetail.css';
import Item from './Item/Item';
import ItemCount from './ItemCount';

function ItemDetail(props) {
    return (
        <div className='detail'>
            <img src={props.imagen} alt={`${props.id}-${props.product}`}/>
            <h4>{props.product}</h4>
            <p>{props.price}</p>
            <ItemCount stock={props.stock} />
        </div>
    );
}

export default ItemDetail;   