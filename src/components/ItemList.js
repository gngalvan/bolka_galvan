import Item from './Item/Item';
import './ItemList.css';


function ItemList(props) {
  
  return (
    <section className='cuerpo'>
      <div>
        <h2>Catálogo de productos</h2>
        <p>Elegí tus productos desde la lista:</p>
      </div>
      <div className='catalogo'>
        {props.productos.map(producto => <Item id={producto.id} product={producto.nombre} price={producto.precio} stock={producto.stock} imagen={producto.imagen} />)}
      </div>
    </section>
  );
}

export default ItemList;