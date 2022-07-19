import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartEmpty from "../CartEmpty/CartEmpty";
import CartProduct from "../CartProduct/CartProduct";
import './CartView.css';



export default function CartView() {
  const { cart, removeFromCart,suma,clearCart } = useContext(CartContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const [totalPrice, settotalPrice] = useState(0);


  useEffect(()=>{
   cart.length ? setEmptyCart(false) : setEmptyCart(true)
   settotalPrice(suma())
  },[cart])


  return (
    <>
    <div className="cartView">
      <h1>Carrito</h1>
      { emptyCart ?(< CartEmpty />):(cart.map((item) => {
          return <CartProduct item={item} key={item.id} removeFromCart={removeFromCart}/>})
        ) 
      }
      <h3>Total a pagar: ${totalPrice}</h3> 
      <button onClick={()=>clearCart()}>
          Limpiar carrito
      </button>
      <button>
          Terminar compra
      </button>
    </div>
    </>
  );
}