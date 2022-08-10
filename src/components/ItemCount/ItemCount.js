import { useState } from "react";
import Button from 'react-bootstrap/Button';


import './ItemCount.css';

function ItemCount({ onAdd, stock }) {
    // const stock = props.stock;

    const [num, setNum] = useState(0);   

    const [newStock, setNewStock] = useState("");

    const stockHandler = () => {
        setNewStock(num);
        console.log(newStock);

    }
    
    const suma = () => {
        if(num<stock){
            setNum(num + 1);
            stockHandler();
        }
        else {
            alert(`El stock de este producto es de ${stock} unidades`);
        }
    }

    const resta = () => {
        if(num>0){
            setNum(num - 1);
            stockHandler();
        }
    } 
    
    

    return (

        <>
            <div className="contador">
                <h3>{num}</h3>
                <p className="textoStock">Stock disponible: {stock}</p>
                <Button variant="secondary" onClick={resta}>-</Button>
                <Button variant="secondary" onClick={suma}>+</Button>
                <Button variant="secondary" className="agregar" onClick={() => onAdd(num)} >Agregar</Button>
            </div>

        </>

  );
}

export default ItemCount;