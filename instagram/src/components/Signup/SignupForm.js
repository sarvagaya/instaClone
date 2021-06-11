import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./SignupForm.module.css";

const SignupForm = props => {
    const [isDisabled, setIsDisabled] = useState(true)

    const [isEmail, setIsEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);

    const [isFullName, setIsFullName] = useState("");
    const [isFullNameValid, setIsFullNameValid] = useState(false);

    const [isUserName, setIsUsername] = useState("");
    const [isUserNameValid, setIsUserNameValid] = useState(false);

    const [isPassword, setIsPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const handleEmail = (event) => {
        setIsEmail(event.target.value);
    }

    const handleFullName = (event) => {
        setIsFullName(event.target.value);
    }

    const handleUsername = (event) => {
        setIsUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setIsPassword(event.target.value)
    }

    useEffect(() => {
        let email = isEmail;
        let password = isPassword;
        let fullName = isFullName;
        let username = isUserName;

        if (email.trim().length > 5 && email.includes("@") && email.includes(".")) {
            setIsEmailValid(true);
        }

        if (fullName.trim().length > 1) {
            setIsFullNameValid(true)
        }

        if (username.trim().length > 3) {
            setIsUserNameValid(true);
        }

        if (password.trim().length > 6) {
            setIsPasswordValid(true);
        }

        if (password.trim().length > 5) {
            setIsPasswordValid(true);
        }

        if (isEmailValid === true && isPasswordValid === true && isFullNameValid === true && isUserNameValid === true) {
            setIsDisabled(false)
        }
    }, [isEmail, isFullName, isUserName, isPassword, isEmailValid, isFullNameValid, isUserNameValid, isPasswordValid])

    const handleSignup = (event) => {
        event.preventDefault();
        let userObj = {
            id: Math.random(),
            email: isEmail,
            fullname: isFullName,
            username: isUserName,
            password: isPassword
        }
        useEffect(() => {
            
        })
        props.onNewUserInfo(userObj)
        alert("Account created Successfully!")
        // props.onSubmit()
        // console.log(props)
    }

    // console.log(props)
    return (
        <React.Fragment>
            <form onSubmit={handleSignup}>
                <Input placeholder="Email" className={styles.signupForm__input} value={isEmail} onChange={handleEmail} />
                <Input placeholder="Full Name" className={styles.signupForm__input} value={isFullName} onChange={handleFullName} />
                <Input placeholder="Username" className={styles.signupForm__input} value={isUserName} onChange={handleUsername} />
                <Input placeholder="Password" className={styles.signupForm__input} value={isPassword} onChange={handlePassword} />
                <Button className={styles.signupForm__button} disabled={isDisabled} onClick={handleSignup}>Sign up</Button>
            </form>
        </React.Fragment>
    )
}

export default SignupForm;