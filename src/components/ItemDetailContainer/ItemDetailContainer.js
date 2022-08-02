import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';

function ItemDetailContainer() {

  const [productosDetailFecth, setProductosDetailFetch] = useState({});
  const {productId} = useParams()

  useEffect(() => {
    const db = getFirestore();

    const productsCollectionRef = collection(db, "productos")
    const productRef = doc(productsCollectionRef, productId);
    
    getDoc(productRef).then((snapshot) => {
      if(snapshot.exists()){
        setProductosDetailFetch({id: snapshot.id, ...snapshot.data()})
       
      }
    })
    }, [productId])


  return (
    <ItemDetail {...productosDetailFecth} />
  );  
}

export default ItemDetailContainer;