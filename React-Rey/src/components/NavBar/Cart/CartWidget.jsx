import { useContext } from 'react';
import cartContext from '../../context';
import { Link } from "react-router-dom";

function CartWidget() {

    const { quantity } = useContext(cartContext);

    return (
        <div className="cartContainer">
            <span className="searchMobile">
                <span className="material-symbols-outlined">
                    search
                </span>
            </span>
            <Link to={"/cart"}>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                <span className="cartQuantity">{quantity}</span>
            </Link>
        </div>
    )
}

export default CartWidget;
