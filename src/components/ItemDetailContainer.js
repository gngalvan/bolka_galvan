import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import './ItemListDetailContainer.css';

function ItemDetailContainer() {

  const [productosDetailFecth, setProductosDetailFetch] = useState([]);

  useEffect(function fetchProductosDetail(){
    fetch('productos.json')
    .then((resp) => resp.json())
    .then((productos) => setProductosDetailFetch(productos))
  }, 2000)

  return (
    <ItemDetail productos={productosDetailFecth} />
  );
}

export default ItemDetailContainer;