import Item from "./Item";
import products from "../../data/products.json";
import { useState, useEffect } from "react";

import './product.css'
import './ItemListContainer.css'
// import ItemListContainer from "./ItemListContainer/ItemListContainer";

    const categories = {
    A: "Electronics",
    B: "Accessories",
    C: "Home",
    D: "Fitness",
    E: "Outdoors",
    F: "Clothing",
}

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState("");

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

    const filteredItems = category ? items.filter(item => item.category === category) : items;
    
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
                <Item key={prod.id} {...prod} />
            ))}
        </div>
        </>
    );
}

export default ItemListContainer