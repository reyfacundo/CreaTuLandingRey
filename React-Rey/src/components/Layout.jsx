import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}> Home </Link>
                    </li>
                    <li>
                        <Link to={"/products"}> Products </Link>
                    </li>
                    {/* <li>
                        <Link to={"/about"}> About Us </Link>
                    </li> */}
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;
