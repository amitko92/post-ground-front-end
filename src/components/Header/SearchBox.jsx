import React from "react";
import style from './Header.module.css';
import {BsSearch} from 'react-icons/bs'

function SearchBox({}){

    return (
        <div className={style.SearchBox} >
            <button className={style.btnSearch}><BsSearch /></button>
            <input className={style.inputSearch} type='text' />
        </div>
    );
}

export default SearchBox;