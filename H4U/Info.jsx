
import styles from "../styles/Info.module.css"
import Image from "next/image"
import Link from "next/link"

const Info = () => {
    return (
        <div className={styles.info_container}>
            <h1 className={styles.info_title}>
                WHO ARE WE?
            </h1>
            <div className={styles.descript}>
                <div className={styles.left_container}>
                    <p>We are a group of individuals promising to modernise our local clinic via digitalisation. 
                        Instead of the old pen-and-paper, we are trying to provide the local clinics a digital method to register, 
                        keep track of patients real-time, maintain their schedule, and keep their other clinic work in one single application interface.
                      </p>

                       <p> Not only clinics, we are also trying to solve the daily issues faced by patients; 
                        we are also developing patient interface to alleviate their problems including prevention of physical presence in clinics to register,
                        pill reminders, and access to their documents, to name a few.
                    </p>
                </div>

                <div className={styles.right_container}>
                    <Image src="/img/merged.png" width="420" height="500" ></Image>
                </div>
            </div>



        </div>
    );
}

export default Info;


