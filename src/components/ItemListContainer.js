import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

  const [productosFecth, setProductosFetch] = useState([]);
  // const {categoryId} = useParams();
  
  // useEffect(() => {
  //   const getProducts = new Promise((resolve) => {
  //     setTimeout(() => {
  //       fetch('productos.json')
  //       .then((resp) => resp.json())
  //       .then((productos) => {
  //         const myData = categoryId 
  //           ? productos.filter((item) => item.categoria === categoryId) : productos;
  //         resolve(myData);
  //       }, 2000);
  //     });

  //     getProducts.then((res) => {
  //       setProductosFetch(res);
  //     });
  //   }, []);
  // });

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