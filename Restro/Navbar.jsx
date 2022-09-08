
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.NavItem}>

                    <div className={styles.NavLeft}>
                        <div className={styles.CallButton}>
                            <Link href="#">
                            <Image src="/img/telephone.png" height="25" width="25"></Image>
                            </Link> 
                        </div>

                        <div className={styles.CallText}>
                            <div className={styles.text}>ORDER NOW!</div>
                            <div className={styles.text}>012-566-434</div>
                        </div>
                    </div>

                    <div className={styles.NavCenter}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}> Homepage </li>
                            <li className={styles.listItem}> Products </li>
                            <li className={styles.listItem}> Menu </li>
                            <li className={styles.listItem}> Restro </li>
                            <li className={styles.listItem}> Events </li>
                            <li className={styles.listItem}> Blog </li>
                            <li className={styles.listItem}> Contact </li>
                            
                        </ul>
                    </div>

                    <div className={styles.NavRight}>
                        <div className={styles.cart}>
                            <Link href="#"> 
                                <Image src="/img/cart.png" height="25" width="25"></Image>
                            </Link>
                        </div>
                    </div>

            </div>
            
        </div>
    );
}

export default Navbar;
