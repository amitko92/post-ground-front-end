import React from "react";
import Link from './NavbarLink';
import style from './Navbar.module.css';

function Navbar({}){

    return (
        <nav className={style.navbar}>
            <Link to={'about'} name={'About'}/>
            <Link to={'profile'} name={'Profile'}/>
        </nav>
    );
}

export default Navbar;