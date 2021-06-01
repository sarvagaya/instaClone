import React, {useEffect} from "react";
import styles from "./LandingCarausel.module.css";

const LandingCarausel = () => {
    let imageArr = [
        "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg", 
        "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg", 
        "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg", 
        "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
    ]
    let index = Math.floor(Math.random()*4)
    let src = imageArr[index]
    return (
        <div className={styles.landingCarausel}>
            <div className={styles.landingCarausel__static}>
                <img src={src} alt="demoImage" />
            </div>
        </div>
    )
}

export default LandingCarausel;