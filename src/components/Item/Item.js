import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Item.css';

function Item(props) {
    return (
        <div className='card'>
            <img src={`/${props.imagen}`} alt={`${props.id}-${props.product}`} />
            <h4>{props.nombre}</h4>
            <p>${props.precio}</p>
            <Link to={`/item/${props.id}`}>
                <Button variant='secondary'>Detalle</Button>
            </Link>
        </div>
    );
}

export default Item;    