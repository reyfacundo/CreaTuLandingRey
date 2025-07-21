import products from '../../data/products.json';
import { useContext } from 'react';
import cartContext from '../context';

import './product.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { addProduct } = useContext(cartContext);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const fetchProducts = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 1000)
        });
        fetchProducts.then((data) => {
            setItems(data)
        })
    }, [])

    const { id } = useParams()
    const product = items.find(prod => prod.id === +id);

    if (!product) {
        return <h2>The selected product doesn't exist.</h2>
    }

    return (
        <div className="DetailContainer">
            <div className='Detail'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h2>${product.price}</h2>
                <div className="prod-actions">
                    <div className="quantity">
                        <button
                            onClick={() => {
                                if (count > 1) setCount(count - 1)
                            }}
                        >
                            -
                        </button>
                        <p id='counter'>
                            {count}
                        </p>
                        <button onClick={() => {
                            if(count < product.stock) setCount((count) => count + 1)
                            }}>
                            +
                        </button>
                    </div>
                    <button onClick={() => addProduct(product, count)}>
                        <span className="material-symbols-outlined">
                            add_shopping_cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
