import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';

function ItemDetailContainer() {

  const [productosDetailFecth, setProductosDetailFetch] = useState({});
  const {id} = useParams()

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

    const productsCollectionRef = collection(db, "productos")
    const productRef = doc(productsCollectionRef);
    
    getDoc(productRef).then((snapshot) => {
      if(snapshot.exists()){
        setProductosDetailFetch({id: snapshot.id, ...snapshot.data()})
       
      }
    })

    // getDoc(productRef).then((snapshot) => {
    //   snapshot.id = productId
    //   if(snapshot.exist()){
    //     setProductosDetailFetch({ ...snapshot.data() });
        
    //     console.log(snapshot.id)
    //   }
    }, [id])


  return (
    <ItemDetail {...productosDetailFecth} />
  );  
}

export default ItemDetailContainer;