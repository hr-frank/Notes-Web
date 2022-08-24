
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.logo_container}>
                <Link href="#">
                  <Image src="/img/logo.png" width="36" height="40"></Image>
                </Link>

                <div className={styles.logo_container_name}>
                   <a>HEALTH 4 U</a>
                </div>   
            </div>


            <div className={styles.right_container}>
               <ul className={styles.right_container_listitems }>

                 <li className={styles.right_container_about}>
                    <Link href="#" >About us </Link>
                 </li>
                
                <li className={styles.right_container_contact}>
                    <Link href="#">
                        <div className={styles.right_container_contact_link}>
                            <Image src="/img/contact.png" width="16" height="16"></Image>
                            <a>Contact</a>
                        </div>
                    </Link>
                </li>
                </ul>

            </div>

        </div>
    );
}

export default Navbar;
