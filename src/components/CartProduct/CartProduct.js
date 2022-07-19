export default function CartProduct({item,removeFromCart}) {
  return (
    <>
        <ul>{item.nombre}</ul>
        <ul>Precio Unitario: ${item.precio}</ul>
        <ul>Cantidad:{item.quantity}</ul>
        <ul>Precio total: ${parseInt(item.precio) * item.quantity}</ul>
        <button onClick={() => removeFromCart(item.id)}>X</button>
    </>
  );
}
