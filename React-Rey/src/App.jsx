import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia nunc vitae nulla accumsan, ac vehicula lacus volutpat. Morbi feugiat ut lacus non viverra. Phasellus consectetur nisi sit amet nisi pellentesque, sed vestibulum velit mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." />
        </>
    );
}

export default App;
