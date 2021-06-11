import React, { useState } from "react";
import Login from "../Login/Login";
import Instagram from "../UI/Instagram/Instagram";
import styles from "./Signup.module.css";
import SignupForm from "./SignupForm";

const Signup = props => {
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => {
        setIsLogin(true);
    }

    return (
        <React.Fragment>
            {isLogin && <Login />}
            {
                !isLogin && <React.Fragment>
                    <div className={styles.signupForm}>
                        <Instagram />
                        <p className={styles.intro}>Signup to see photos and videos from your friends.</p>
                        <SignupForm onNewUserInfo={props.onHandleNewUser} onSubmit={handleLogin} />
                        <p className={styles.extraInfo}>By signing up, you agree to our <b>Terms</b>, <b>Data Policy</b> and <b>cookies policy</b>.</p>
                    </div>
                    <div className={styles.isLogin}>
                        <p className={styles.isLogin__info}>Have an account? <span onClick={handleLogin}>Log in</span></p>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Signup;