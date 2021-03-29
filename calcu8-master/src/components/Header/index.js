import React from "react";
import style from "../Header/Header.module.css"



class Header extends React.Component {
    render() {
        return (
            <h1 className={style.title}>calcu8</h1>
        )
    }
}

export default Header;