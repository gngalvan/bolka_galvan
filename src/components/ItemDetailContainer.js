import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

  const [productosDetailFecth, setProductosDetailFetch] = useState({});
  const {productId} = useParams()

  useEffect(() => {
    const getItems = new Promise((resolve) =>{
      setTimeout(() => {
        fetch('productos.json')
        .then(response => response.json())
        .then((result) => {
          const myProducts = result.find((product) => product.id == productId);
          resolve(myProducts);
        });
      }, 2000);
    });

    getItems.then((res) =>{
      setProductosDetailFetch(res);
    });
  }, []);

  return (
    <ItemDetail {...productosDetailFecth} />
  );
}

export default ItemDetailContainer;