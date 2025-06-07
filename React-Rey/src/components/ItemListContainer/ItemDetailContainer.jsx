import products from '../../data/products.json';

import './product.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() =>{
        const fetchProducts = new Promise((resolve)=>{
            setTimeout(() =>{
                resolve(products)
            },1000)
        });
        fetchProducts.then((data) =>{
            setItems(data)
        })
    },[])

    const {id} = useParams()
        const product = items.find(prod => prod.id === +id);
        
        if(!product){
            return <h2>The selected product doesn't exist.</h2>
        }

    return (
        <div className='Detail'>
            <h1>Details</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
        </div>
    );
}

export default ItemDetailContainer;
