import cartContext from "../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const CartContent = () => {
    const { products } = useContext(cartContext);
    console.log(products);

    return (
        <div className="cartCardContainer">
            <div className="cardContainer">
                {products.map((prod) => (
                    <div className="cartCard" key={prod.product.id}>
                    <Link
                        to={`/products/${prod.product.id}`}
                    className="productData">
                        <span>
                            <h2>{prod.product.name}</h2>
                            <h2>${prod.product.price}</h2>
                            <h3>QUANTITY: {prod.quantity}</h3>
                        </span>
                    </Link>
                        <span className="deleteProduct">
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </span>
                        </div>
                ))}
            </div>
            <div className="purchase">
                <h2>BUY</h2>
            </div>
        </div>
    );
};

export default CartContent;
