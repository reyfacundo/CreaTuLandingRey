import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "./Cart/CartWidget";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="left">
                    <span className="logo">
                        <img src={logo} alt="logo" />
                    </span>
                    <span className="burger">
                        <span className="material-symbols-outlined">menu</span>
                    </span>
                    <ul className="tabs">
                        <li>Home</li>
                        <li>Comics</li>
                        <li>Games</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="right">
                    <div className="searchBar">
                        <div className="leftPart">
                            <input type="text" placeholder="Search..." />
                        </div>
                        <div className="rightPart">
                            <div className="vertical-line"></div>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </div>
                    </div>
                    <div className="cartContainer">
                        <span className="searchMobile">
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </span>
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <span className="cartQuantity">1</span>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
