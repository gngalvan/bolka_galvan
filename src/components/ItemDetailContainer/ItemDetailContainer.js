import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {

  const [productosDetailFecth, setProductosDetailFetch] = useState({});
  const {productId} = useParams()




  // useEffect(() => {
  //   const getItems = new Promise((resolve) =>{
  //     setTimeout(() => {
  //       fetch('/productos.json')
  //       .then(response => response.json())
  //       .then((result) => {
  //         const myProducts = result.find((product) => product.id === productId);
  //         resolve(myProducts);
  //       });
  //     }, 2000);
  //   });

  //   getItems.then((res) =>{
  //     setProductosDetailFetch(res);
  //   });
  // }, []);


  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "productos");

    getDoc(productRef).then((snapshot) => {
      if(snapshot.exist()){
        setProductosDetailFetch({ id: snapshot.id, ...snapshot.data() });
        console.log(snapshot.id)
      }
    })
  }, [productId])

  return (
    <ItemDetail {...productosDetailFecth} />
  );  
}

export default ItemDetailContainer;