// import products from "../../data/products.json";
import { useContext } from "react";
import cartContext from "../context";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import "./product.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { addProduct } = useContext(cartContext);
    // const [item, setItem] = useState();
    const [data, setData] = useState();
    const [count, setCount] = useState(1);

    const { id } = useParams();
    
    const db = getFirestore();
    useEffect(()=>{
        const itemRef = doc(db, "products", id);
        getDoc(itemRef).then(snapshot => {
            setData({ id: id, ...snapshot.data() });
        });
    },[id,db]);
    // useEffect(() => {
    //     const fetchProducts = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(products);
    //         }, 1000);
    //     });
    //     fetchProducts.then((data) => {
    //         setItems(data);
    //     });
    // }, []);

    // const { id } = useParams();
    // const product = items.find((prod) => prod.id === +id);

    if (data == undefined) {
        return (
            <span className="material-symbols-outlined loader">
                hourglass_bottom
            </span>
        );
    }

    return (
        <div className="DetailContainer">
            <div className="Detail">
                <h2>{data.title}</h2>
                <img src={data.imageId} alt="" />
                <p>{data.description}</p>
                <h2>${data.price}</h2>
                <div className="prod-actions">
                    <div className="quantity">
                        <button
                            onClick={() => {
                                if (count > 1) setCount(count - 1);
                            }}
                        >
                            -
                        </button>
                        <p id="counter">{count}</p>
                        <button
                            onClick={() => {
                                if (count < data.stock)
                                    setCount((count) => count + 1);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <button onClick={() => addProduct(data, count)}>
                        <span className="material-symbols-outlined">
                            add_shopping_cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
