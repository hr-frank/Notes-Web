
import Image from "next/image"
import styles from "../styles/Intro.module.css"


const Intro = () => {
    return (
        <div className={styles.intro_container}>
            <div className={styles.intro_container_leftcard}>
                <Image src="/img/mobile.png" width="220" height="520" ></Image>
            </div>

            <div className={styles.intro_container_rightcard}>
                <h1 className={styles.title}>
                    A revolution brings in the medical world!!
                </h1>
                <p className={styles.description}>
                    Introducing
                    <span className={styles.h4u}> Health 4 U, </span>
                    an app to ease your clinic work
                </p>
                <div className={styles.input_text}>
                    <input className={styles.input_gmail} type="text" placeholder="youremail@gamil.com"/>
                    <button className={styles.contactbutton}> Contact Us</button>
                </div>

            </div>
            
        </div>
    );
}

export default Intro;
