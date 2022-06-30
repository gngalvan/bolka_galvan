import { useEffect, useState } from 'react';
import Item from './Item/Item';
import './ItemList.css';


function ItemList() {

  const [info, setInfo] = useState([])

  useEffect(()=>{
      setTimeout(()=>{
        fetch('productos.json')
      .then((resp) => resp.json())
      .then((productos) => setInfo(productos))
      }, [])
    }, 2000)
      

  return (
    <section className='cuerpo'>
        <div>
            <h2>Catálogo de productos</h2>
            <p>Elegí tus productos desde la lista:</p>
        </div>
        <div className='catalogo'>
            {info && info.map(i => <Item product={i.nombre} price={i.precio} stock={i.stock} imagen={i.imagen} />)}
        </div>

    </section>
  );
}

export default ItemList;