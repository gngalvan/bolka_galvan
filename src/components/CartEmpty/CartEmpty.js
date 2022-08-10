import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function CartEmpty() {
  return (
    <>
     <h3>No hay elementos en el carrito</h3>
     <Link to={'/'}>
     <Button variant="secondary">Volver al Home</Button>
     </Link>
    </>
  );
}
