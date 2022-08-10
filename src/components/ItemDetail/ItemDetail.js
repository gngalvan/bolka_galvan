import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';

function ItemDetail(props) {
    
    const { nombre, id, descripcion, precio, imagen, stock} = props;
    const { addToCart } = useContext(CartContext);

    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const onAdd = (num) => {
        setPurchaseCompleted(true);
        addToCart(props, num);
    }


    return (
        <div className='detail'>
            <img src={`/${imagen}`} alt={`${id}-${nombre}`} />
            <h4>{nombre}</h4>
            <span>{descripcion}</span>
            <p className='precio'>{`$${precio}`}</p>
            {!purchaseCompleted ? (
                <ItemCount stock={stock} onAdd={onAdd} />
            ) :
            ( 
            <>
            <Link to={`/cart`}>
            <Button variant="secondary">Terminar compra</Button>            
            </Link>
            </>
            )}
        </div>
    );
}

export default ItemDetail;   