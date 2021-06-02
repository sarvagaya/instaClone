import React from "react";
import styles from "./Input.module.css";

const Input = props => {
    return (

        <input
            type={props.type}
            id={props.id}
            name={props.name}
            className={`${styles.input} ${props.className}`}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder={props.placeholder}
        />
    )
}

export default Input;