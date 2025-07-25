import cartContext from "../../context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./Cart.css";

const CartContent = () => {
    const { products, deleteProduct } = useContext(cartContext);
    const [orderId, setOrderId] = useState();

    if (products.length == 0) {
        return (
            <div className="cartCardContainer">
                <div className="cardContainer">
                    <div className="cartCard">
                        <h2 className="emptyCart">The cart is empty!</h2>
                    </div>
                </div>
            </div>
        );
    }

    const totalPrice = +products
        .reduce((total, prod) => total + prod.product.price * prod.quantity, 0)
        .toFixed(2);

    const createOrder = (productsArray, total) => {
        const order = {
            products: [...productsArray],
            total: +total,
        };
        const db = getFirestore();
        const itemCollection = collection(db, "order");
        addDoc(itemCollection, order)
            .then(({ id }) => {
                setOrderId(id);
                document.querySelector(".order").classList.remove("hidden");
            })
            .catch((err) => console.error("Order failed:", err));
    };
    return (
        <div className="cartCardContainer">
            <div className="cardContainer">
                {products.map((prod) => (
                    <div className="cartCard" key={prod.product.id}>
                        <Link
                            to={`/products/${prod.product.id}`}
                            className="productData"
                        >
                            <span>
                                <h2>{prod.product.title}</h2>
                                <h2>
                                    $
                                    {(
                                        prod.product.price * prod.quantity
                                    ).toFixed(2)}
                                </h2>
                                <h3>QUANTITY: {prod.quantity}</h3>
                            </span>
                        </Link>
                        {/* <img className="cartImg" src={prod.product.imageId} alt="" /> */}
                        <span
                            className="deleteProduct"
                            onClick={() => deleteProduct(prod.product)}
                        >
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </span>
                    </div>
                ))}
            </div>
            <div className="total">
                {/* <p>TOTAL:</p>
                <span>
                {totalPrice}
                </span> */}
                <h3>TOTAL: {totalPrice}</h3>
            </div>
            <div
                className="purchase"
                onClick={() => {
                    createOrder(
                        products.map((prod) => {
                            return {
                                quantity: prod.quantity,
                                product: prod.product.title,
                            };
                        }),
                        totalPrice
                    );
                }}
            >
                <h2>BUY</h2>
            </div>
            <div className="order hidden">
                <h2>ORDER PLACED!</h2>
                <h3>
                    ORDER ID: <span>{orderId}</span>
                </h3>
            </div>
        </div>
    );
};

export default CartContent;
