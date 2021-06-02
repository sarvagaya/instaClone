import React from "react";
import styles from "./Instagram.module.css"
const Instagram = (props) => {
    return (
        <h1 className={`${props.className} ${styles.instagram}`}>Instagram</h1>
    )
}

export default Instagram;