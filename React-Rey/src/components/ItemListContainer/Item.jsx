import "./product.css";
import { Link } from "react-router-dom";

function Item({ title, description, price, id, imageId }) {
    return (
        <Link to={`/products/${id}`} className="card">
            <h2>{title}</h2>
            <img src={imageId} alt="" />
            <h3>{description}</h3>
            <h2>${price}</h2>
        </Link>
    );
}

export default Item;
