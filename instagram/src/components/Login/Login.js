import React, { useState } from "react";
import Form from "../Form/Form";
import Signup from "../Signup/Signup";
import Instagram from "../UI/Instagram/Instagram";
import styles from "./Login.module.css";

const Login = props => {
    const [isSignup, setIsSignup] = useState(false);
    const imgArr = [
        "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
    ]
    const showImagws = () => {
        let src = imgArr[Math.floor(Math.random() * imgArr.length)];
        return (
            <div className={styles.login__mobile}>
                <img src={src} className={styles.login__mobile_image} alt="" />
            </div>
        )
    }

    const handleSignup = () => {
        setIsSignup(true);
    }

    return (
        <React.Fragment>
            {!isSignup && 
            <div className={styles.login}>
                <div className={styles.login__mobileImage}>
                    {showImagws()}
                </div>
                <div>
                    <div className={styles.login__form}>
                        <Instagram className={styles.instagram} />
                        <Form className={styles.login__loginForm} />
                    </div>
                    <div className={styles.login__signup}>
                        <p>Dont have an account? <span onClick={handleSignup}>Sign up</span></p>
                    </div>
                </div>
            </div>
            }
            {isSignup && <Signup onHandleNewUser={props.onNewUser} />}
        </React.Fragment>
    )
}

export default Login;