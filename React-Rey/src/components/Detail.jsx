import products from '../data/products.json';

import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams()

        console.log(id);

        const product = products.find(prod => prod.id === +id);
        
        if(!product){
            return <h2>The selected product doesn't exist.</h2>
        }

    return (
        <div>
            <h1>Details</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h2>{product.price}</h2>

        </div>
    );
}

export default Detail;
