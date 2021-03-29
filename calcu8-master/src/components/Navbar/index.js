import React from "react";
import style from "../Navbar/Navbar.module.css"


class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div className={style.container}>
                    <nav>
                        <ul>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;