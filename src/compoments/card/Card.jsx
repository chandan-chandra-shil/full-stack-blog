import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>27.03.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur  elit.</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil nobis illum id non, numquam ipsa, repellat assumenda eaque atque, porro odit accusamus odio voluptates ratione laboriosam aliquam facilis dolores.</p>
        <Link href="/" className={styles.link}>
          Read More 
        </Link>
      </div>
    </div>
  );
};

export default Card;
