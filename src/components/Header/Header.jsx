import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar/Navbar";
import style from './Header.module.css';
import SearchBox from "./SearchBox";
import SigninBox from "./SigninBox";

function Header({}){

    return (
        <div className={style.header}>
            <div className={style.links}>
                <Logo />
                <Navbar />
            </div>
            <SearchBox />
            <SigninBox />
        </div>
    );
}

export default Header;