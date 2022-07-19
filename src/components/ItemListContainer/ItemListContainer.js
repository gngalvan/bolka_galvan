import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

  const [productosFecth, setProductosFetch] = useState([]);
  const {categoryId} = useParams();

  useEffect(function fetchProductos(){
    fetch('/productos.json')
    .then((resp) => resp.json())
    .then((productos) => setProductosFetch(categoryId ? productos.filter((i)=>i.categoria === categoryId) : productos ))
  },[categoryId])

  

  return (
    <ItemList productos={productosFecth} />
  );
}

export default ItemListContainer;