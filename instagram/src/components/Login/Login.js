import React from "react";
import LandingCarausel from "../Ui/LandingCarausel";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
    return(
        <div className={styles.login__body}>
            <LandingCarausel />
            <LoginForm />
        </div>
    )
}

export default Login;