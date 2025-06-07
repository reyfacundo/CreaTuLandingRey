import Product from "./Product";
import './product.css'
import products from "../data/products.json";
import { useState } from "react";
// import ItemListContainer from "./ItemListContainer/ItemListContainer";

    const categories = {
    A: "Electronics",
    B: "Accessories",
    C: "Home",
    D: "Fitness",
    E: "Outdoors",
    F: "Clothing",
}

function Products() {

    const [category, setCategory] = useState("");

    const filteredItems = category ? products.filter(item => item.category === category) : products;

    return (
        <>
            <button onClick={() => setCategory(categories.A)}>{categories.A}</button>
            <button onClick={() => setCategory(categories.B)}>{categories.B}</button>
            <button onClick={() => setCategory(categories.C)}>{categories.C}</button>
            <button onClick={() => setCategory(categories.D)}>{categories.D}</button>
            <button onClick={() => setCategory(categories.E)}>{categories.E}</button>
            <button onClick={() => setCategory(categories.F)}>{categories.F}</button>
        <div id="container">
            {/* <ItemListContainer/> */}
            {filteredItems.map((prod) => (
                <Product key={prod.id} {...prod} />
            ))}
        </div>
        </>
    );
}

export default Products