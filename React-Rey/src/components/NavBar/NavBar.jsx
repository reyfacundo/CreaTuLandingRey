import React from "react";
import "./NavBar.css";
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <span className="logo"><img src={logo} alt="logo" /></span>
                        <ul className="tabs">
                            <li>HOME</li>
                            <li>COMICS</li>
                            <li>GAMES</li>
                            <li>ABOUT</li>
                        </ul>
                    </div>
                    {/* <div className="center">
                        <h3>2025</h3>
                    </div> */}
                    <div className="right">
                        <div className="searchBar">
                            {/* <div className="insideContainer"> */}
                                <div className="leftPart">
                                    <input
                                        type="text"
                                        placeholder="SEARCH..."
                                    />
                                </div>
                                <div className="rightPart">
                                    <div className="vertical-line"></div>
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                            </div>
                        {/* </div> */}
                        <div className="cartContainer">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
