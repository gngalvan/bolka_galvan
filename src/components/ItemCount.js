import { useState } from "react";
import './ItemCount.css';

function ItemCount({ stock }) {
    const [num, setNum] = useState(0);   
    
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
    
        <>
            <div className="contador">
                <h3>{num}</h3>
                <p>Stock disponible: {stock}</p>
                <button onClick={suma}>+</button>
                <button onClick={resta}>-</button>
            </div>
        </>

  );
}

export default ItemCount;