import React, { useContext} from "react";
import { Link } from "react-router-dom";
import style from './Header.module.css';
import {BsSearch} from 'react-icons/bs'
import NavbarLink from "./Navbar/NavbarLink";
import { UserDetailsContext } from "../../Contexts/UserDetailsContext";

function SigninBox({}){

    const {userDetails} = useContext(UserDetailsContext);
    const isLoggedIn = userDetails.isLoggedIn;
    const userName = 'amitko';

    let btns = '';

    if(isLoggedIn){
        btns = (
            <>
                <NavbarLink to={'profile'} name={userName}/>
                <span className="SigninBoxSeperaitor">
                    |
                </span>
                <Link to={'signOut'} >signout</Link>
            </>

        );
    }else{

        btns = (
            <>
                <Link to={'login'} >login</Link>
                <span className="SigninBoxSeperaitor">
                    |
                </span>
                <Link to={'sign-up'} >sign up</Link>
            </>
            )
    }

    return (
        <div className={style.SigninBox} >
            {btns}
        </div>
    );
}

export default SigninBox;