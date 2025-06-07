import "./product.css";
import { Link } from "react-router-dom";

function Product({ name, description, price, id }) {
    return (
        <Link to={`/products/${id}`} className="card">
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h2>{price}</h2>
        </Link>
    );
}

export default Product;
