import React, { useState } from "react";
import Button from "../../Ui/Button";
import styles from "./Form.module.css"

const Form = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        // console.log(event.target.value)
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        console.log(email, password)
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <input className={styles.input} type="text" placeholder="Email" onChange={handleEmail} />
            <br />
            <input className={styles.input} type="password" placeholder="Password" onChange={handlePassword}  />
            <br />
            <Button type="submit">Log In</Button>
        </form>
    )

}

export default Form;