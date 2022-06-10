import React from "react";
import style from './Page.module.css';

function Page({children}){

    return (
        <div className={style.page}>
            {children}
        </div>
    );
}

export default Page;

