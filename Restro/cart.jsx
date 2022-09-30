

import styles from "../styles/cart.module.css";
import Image from "next/image";

const Cart = () => {


    return (
        <div className={styles.container}>

            <div className={styles.left}>

               <table className={styles.table}>
                    <tr className={styles.trtitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quentity</th>
                        <th>Total</th>
                    </tr>
                    
                    <tr>
                        <td>
                            <div className={styles.imgcontainer}>
                                <Image
                                   src="/img/pizza.png"
                                   layout="fill"
                                   objectFit="cover"
                                   alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Onion Pizza</span>
                        </td>
                        <td>
                            <span className={styles.extra}> Double ingredients, spicy sacue</span>
                        </td>
                        <td>
                            <span className={styles.price}>₹199</span>
                        </td>
                        <td>
                            <span className={styles.Quentity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>₹398</span>
                        </td>     
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.imgcontainer}>
                                <Image
                                   src="/img/pizza.png"
                                   layout="fill"
                                   objectFit="cover"
                                   alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Onion Pizza</span>
                        </td>
                        <td>
                            <span className={styles.extra}> Double ingredients, spicy sacue</span>
                        </td>
                        <td>
                            <span className={styles.price}>₹199</span>
                        </td>
                        <td>
                            <span className={styles.Quentity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>₹398</span>
                        </td>     
                    </tr>

               </table>

            </div>




            <div className={styles.right}>

                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>₹179.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>₹0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>₹179.60
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!</button>
                </div>

            </div>
            
        </div>
    );
}

export default Cart;
