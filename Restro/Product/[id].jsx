import React, { useState } from 'react';
import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
    const[size, setSize] = useState(0);
    const Pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "Onion Pizza",
        price: [169.0, 199.0, 219.0],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum modi ipsum nihil sed iure qui reprehenderit hic minus asperiores aut, esse fuga repellat odit nesciunt? Autem ducimus ex iusto consequatur?",


    };


    return <div className={styles.container}>

        <div className = {styles.left}>
             <div className={styles.imgcontainer}>
                <Image objectFit="contain" src={Pizza.img} layout="fill" alt=""/>
             </div>
        </div>

        <div className ={styles.right}>

                <h1 className={styles.title}>{Pizza.name}</h1>
                <span className={styles.price}>₹{Pizza.price[size]}</span>
                <p className={styles.desc}>{Pizza.desc}</p>
                <h3 className={styles.choose}>Choose the Size</h3>

                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>small</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>large</span>
                    </div>
                </div>

                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className="{styles.checkbox}"
                        />
                        <label htmlFor="double"> Double Ingredients</label>
                    </div>
                    
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            
                            id="spicy"
                            name="spicy"
                            className="{styles.checkbox}"
                        />
                        <label htmlFor="spicy"> Spicy Sauce</label>
                    </div>

                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="garlic"
                            name="garlic"
                            className="{styles.checkbox}"
                        />
                        <label htmlFor="garlic"> Garlic Sauce</label>
                    </div>

                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="cheese"
                            name="cheese"
                            className="{styles.checkbox}"
                        />
                        <label htmlFor="cheese"> Extra Cheese</label>
                    </div>

                </div>

                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quentity} />
                    <button className={styles.cart}> Add to cart</button>

                </div>

            
        </div>


    </div>;
};

export default Product;

