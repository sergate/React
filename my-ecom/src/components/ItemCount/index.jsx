import './ItemCount.css';
import React, {useState, useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setcount] = useState(parseInt(initial));

    const decrease = () => {
        setcount(count - 1);
    }

    const increase = () => {
        setcount(count + 1);
    }

    useEffect(() => {
        setcount(parseInt(initial));
    }, [initial])

    return(
        <div className='counter'>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
