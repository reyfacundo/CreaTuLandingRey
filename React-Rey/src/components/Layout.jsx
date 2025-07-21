import { Link, Outlet } from "react-router-dom";
import Navbar from "./NavBar/NavBar";

function Layout() {
    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to={"/"}> Home </Link>
                    </li>
                    <li>
                        <Link to={"/products"}> Products </Link>
                    </li>
                </ul>
            </nav> */}
            <Navbar/>
            <Outlet />
        </>
    );
}

export default Layout;
