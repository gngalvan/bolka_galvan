import Button from 'react-bootstrap/Button';

export default function CartProduct({item,removeFromCart}) {
  return (
    <>
        <ul>{item.nombre}</ul>
        <ul>Precio Unitario: ${item.precio}</ul>
        <ul>Cantidad:{item.quantity}</ul>
        <ul>Precio total: ${item.precio * item.quantity}</ul>
        <Button variant='secondary' onClick={() => removeFromCart(item.id)}>X</Button>
    </>
  );
}
