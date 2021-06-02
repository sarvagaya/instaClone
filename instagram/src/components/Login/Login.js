import React from "react";
import Form from "../Form/Form";
import Instagram from "../UI/Instagram/Instagram";
import styles from "./Login.module.css";

const Login = props => {
    return (
        <React.Fragment>
            <div className={styles.login}>
                <div className={styles.login__mobileImage}>
                    <img src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png" alt="mobileImage"/>
                </div>
                <div className={styles.login__form}>
                    <Instagram className={styles.instagram} />
                    <Form className={styles.login__loginForm} />
                    <div className={styles.login__signup}>
                    <p>Dont have an account? <span>Sign up</span></p>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;