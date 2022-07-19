import { Link } from "react-router-dom";

export default function CartEmpty() {
  return (
    <>
     <h3>No hay elementos en el carrito</h3>
     <Link to={'/'}>
     <button>Volver al Home</button>
     </Link>
    </>
  );
}
