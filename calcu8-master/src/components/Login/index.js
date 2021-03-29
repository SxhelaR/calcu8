import React from "react";
import style from "../Login/Login.module.css"


class Login extends React.Component {
    render() {
        return (
        
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.welcome}>Welcome</h1>
                <form className={style.holders}>
                    <input className={style.entry} type="text" placeholder="Username"></input>
                        <input className={style.entry} type="password" placeholder="Password"></input>
                            <button className={style.login} type="submit" id="login-button">Login</button>
		</form>
	</div>

    </div>
    )
    }
}

export default Login;