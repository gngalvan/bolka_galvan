import { Link } from 'react-router-dom';

import './Item.css';

function Item(props) {
    return (
        <div className='card'>
            <img src={`/${props.imagen}`} alt={`${props.id}-${props.product}`} />
            <h4>{props.product}</h4>
            <p>{props.price}</p>
            <Link to={`/item/${props.id}`}>
                <button>Detalle</button>
            </Link>
        </div>
    );
}

export default Item;    