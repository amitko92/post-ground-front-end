import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css';

function NavbarLink({to, name}){

    return (
        <>
            <Link to={to} className={style.link}>{name}</Link>
        </>
    );
}

export default NavbarLink;