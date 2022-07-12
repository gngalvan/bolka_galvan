import { useState } from "react";

import './ItemCount.css';

function ItemCount({ stock }) {
    const [num, setNum] = useState(0);   
    const [countState, setCountState] = useState(true);
    
    const suma = () => {
        if(num<stock){
            setNum(num + 1);
        }
        else {
            alert(`El stock de este producto es de ${stock} unidades`);
        }
    }

    const resta = () => {
        if(num>0){
            setNum(num - 1)
        }
    } 
    

    return (
        countState ? (
        <>
            <div className="contador">
                <h3>{num}</h3>
                <p className="textoStock">Stock disponible: {stock}</p>
                <button onClick={resta}>-</button>
                <button onClick={suma}>+</button>
            </div>
            <button className="agregar" onClick={ () => setCountState(false) }  >Agregar</button>
        </>
        ) : ("")
  );
}

export default ItemCount;