import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, Firestore } from 'firebase/firestore';
import { getAllProducts } from '../services/firestore';

function ItemListContainer() {

  const [productosFecth, setProductosFetch] = useState([]);
  const {categoryId} = useParams();

  useEffect(function fetchProductos(){
    // fetch('/productos.json')
    // .then((resp) => resp.json())
    console.log(getAllProducts())
    getAllProducts().then((productos) => setProductosFetch(categoryId ? productos.filter((i)=>i.categoria === categoryId) : productos ))
  },[categoryId])

  // useEffect(() => {
  //   const db = getFirestore();

  //   const productRef = doc(db, "bolka");

  //   getDoc(productRef).then((snapshot) => {
  //     setProductosFetch(categoryId ? snapshot.filter((i)=>i.categoria === categoryId) : snapshot )
  //     // if(snapshot.exist()){
  //     // setProductosFetch([{...snapshot.data()}])
    
  //     })
  //   }, [categoryId])
  

  return (
    <ItemList productos={productosFecth} />
  );
}

export default ItemListContainer;