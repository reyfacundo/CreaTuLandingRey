import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/NavBar/NavBar";
// import Products from "./components/Products";
// import Detail from "./components/Detail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Home from "./components/Home";
import Error from "./components/Error";

function App() {
    return (
        <>
            {/* <Navbar /> */}
            {/* <ItemListContainer msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia nunc vitae nulla accumsan, ac vehicula lacus volutpat. Morbi feugiat ut lacus non viverra. Phasellus consectetur nisi sit amet nisi pellentesque, sed vestibulum velit mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." /> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/products' element={<ItemListContainer/>}/>
                        {/* <Route path='/products' element={<ItemListContainer/>}/> */}
                        {/* <Route path='/about' element={<About/>}/> */}
                        <Route path='/products/:id' element={<ItemDetailContainer/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
