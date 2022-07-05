import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

function ItemListContainer() {

  const [productosFecth, setProductosFetch] = useState([]);

  useEffect(function fetchProductos(){
    fetch('productos.json')
    .then((resp) => resp.json())
    .then((productos) => setProductosFetch(productos))
  })

  return (
    <ItemList productos={productosFecth} />
  );
}

export default ItemListContainer;