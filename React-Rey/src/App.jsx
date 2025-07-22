import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState} from "react";
import CartContext from "./components/context";


import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/NavBar/NavBar";
// import Products from "./components/Products";
// import Detail from "./components/Detail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Home from "./components/Home";
import CartContent from "./components/NavBar/Cart/CartContent";
import Error from "./components/Error";

function App() {
    // const [data, setData] = useState({});
    // const db = getFirestore();
    // useEffect(()=>{
    //     const itemRef = doc(db, "products", "JNxyGqzTUe2PFvTqYLt6");
    //     getDoc(itemRef).then(snapshot => {
    //         console.log(snapshot);
    //         console.log(snapshot.data);
    //         setData(snapshot.data());
    //     });

    // },[])
    const [quantity, setQuantity] = useState(0);
    const [products, setProducts] = useState([]);
    const addProduct = (product, q) => {
        if (products.find((e) => e.product.id === product.id)) {
            setProducts((prev) =>
                prev.map((p) =>
                    p.product.id === product.id
                        ? { ...p, quantity: p.quantity + q }
                        : p
                )
            );
        } else {
            setProducts((prev) => [...prev, { product, quantity: q }]);
        }
        setQuantity((quantity) => quantity + q);
    };
    const deleteProduct = (product) => {
        const filteredProduct = products.filter(
            (e) => e.product.id === product.id
        );
        setQuantity((quantity) => quantity - filteredProduct[0].quantity);
        setProducts((prev) => prev.filter((e) => e.product.id !== product.id));
    };

    return (
        <>
            {/* <Navbar /> */}
            {/* <ItemListContainer msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia nunc vitae nulla accumsan, ac vehicula lacus volutpat. Morbi feugiat ut lacus non viverra. Phasellus consectetur nisi sit amet nisi pellentesque, sed vestibulum velit mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." /> */}
            <CartContext.Provider
                value={{ quantity, addProduct, deleteProduct, products }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route
                                path="/products"
                                element={<ItemListContainer />}
                            />
                            {/* <Route path='/products' element={<ItemListContainer/>}/> */}
                            {/* <Route path='/about' element={<About/>}/> */}
                            <Route
                                path="/products/:id"
                                element={<ItemDetailContainer />}
                            />
                            <Route path="/cart" element={<CartContent />} />
                            <Route path="*" element={<Error />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartContext.Provider>
        </>
    );
}

export default App;
