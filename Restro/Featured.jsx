

import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
   const images = [
    "/img/featured.jpg",
   
   ];

    return (
        <div className={styles.container}>

            <div className={styles.arrow_container} styles={{left:0}}>
                <Image src="/img/arrowl.png" alt=" " layout='fill'/> 
            </div>

                <div className={styles.wrapper}>
                        { images.map((img,i)=> (
                            <div className={styles.img_container}  key={img}>
                                <Image src={img} alt=" " layout="fill"/>
                            </div>
                        ))}
                </div>
                
            <div className={styles.arrow_container} styles={{right:0}}>
                <Image src="/img/arrowr.png" alt=" " layout='fill'/> 
            </div>
            
        </div>
    );
};
