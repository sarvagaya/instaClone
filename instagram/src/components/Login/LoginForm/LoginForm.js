import React from "react";
import Form from "./Form";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    return (
        <div className={styles.container}>
            <h2>Instagram</h2>
            <Form />
            <div className={styles.loginform__separate}>
                <div className={styles.side}></div>
                <div className={styles.or}>OR</div>
                <div className={styles.side}></div>
            </div>
        </div>
    )
}

export default LoginForm;