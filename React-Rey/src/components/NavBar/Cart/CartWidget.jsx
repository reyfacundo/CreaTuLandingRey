import { useContext } from "react";
import cartContext from "../../context";
import { Link } from "react-router-dom";

function CartWidget() {
    const { quantity } = useContext(cartContext);

    return (
        <Link to={"/cart"} id="cartLink">
            <div className="cartContainer">
                <span className="searchMobile">
                    <span className="material-symbols-outlined">search</span>
                </span>
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="cartQuantity">{quantity}</span>
            </div>
        </Link>
    );
}

export default CartWidget;
