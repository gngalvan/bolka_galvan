import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { db } from "../../services/firestore";
import {
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";

function ItemListContainer() {

  const [productosFecth, setProductosFetch] = useState([]);
  const {categoryId} = useParams();


  const getData = async (category) =>{
    try {
      const document = category ? query(collection(db,"productos"),where('categoria','==',category))
                                : collection(db,"productos")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setProductosFetch(result)
       
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])

  return (
    <ItemList productos={productosFecth} />
  );
}

export default ItemListContainer;