import { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/CartContext";
import CartEmpty from "../CartEmpty/CartEmpty";
import CartProduct from "../CartProduct/CartProduct";
import Checkout from "../Checkout/Checkout";
import './CartView.css';



export default function CartView() {
  const { cart, removeFromCart,suma,clearCart } = useContext(CartContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const [modal, setModal] = useState(false);
  const [totalPrice, settotalPrice] = useState(0);


  useEffect(()=>{
   cart.length ? setEmptyCart(false) : setEmptyCart(true)
   settotalPrice(suma())
  },[cart])

  const handleClose = () => {
    setModal(false)
  }

  return (
    <>
    <div className="cartView">
      <h1>Carrito</h1>
      { emptyCart ?(< CartEmpty />):(cart.map((item) => {
          return <CartProduct item={item} key={item.id} removeFromCart={removeFromCart}/>})
        ) 
      }
      <h3>Total a pagar: ${totalPrice}</h3> 
      <Button variant="secondary" onClick={()=>clearCart()}>
          Limpiar carrito
      </Button>
      <Button variant="secondary" onClick={()=>setModal(true)}>
          Terminar compra
      </Button>
      {modal && <Checkout handleClose={handleClose} total={totalPrice} clearCart={clearCart}/>}
    </div>
    </>
  );
}