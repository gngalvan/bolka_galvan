
import './CartWidget.css';
import cart from '../assets/cart.png';

function CartWidget() {
  return (
    <div>
        <img className="cartIcon" alt="icon-carrito" src={cart}/>
    </div>    
  );
}

export default CartWidget;