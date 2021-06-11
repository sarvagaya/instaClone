import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./Form.module.css";

const Form = props => {
    return(
        <form className={styles.form}>
            <Input className={styles.input} type="email" name="email" id="email" placeholder="Enter email" />
            <Input className={styles.input} type="password" name="password" id="password" placeholder="Password" />
            <Button type="submit" className={styles.button} disabled={true}>Log in</Button>
        </form>
    )
}

export default Form;