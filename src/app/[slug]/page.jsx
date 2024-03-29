import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/compoments/menu/Menu";
import Image from "next/image";
import Comments from "@/compoments/comments/Comment";


function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" fill  className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span>John Doe</span>
              <span>28.03.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, harum. Rerum fugiat consequuntur aliquam quaerat a unde accusamus nam ad, culpa ex alias quam molestiae sed dolorum ipsam mollitia molestias. Eligendi earum debitis voluptates aliquid error blanditiis non minima ratione vel consectetur ea tempora voluptate possimus quae labore perspiciatis cum officiis, natus velit cupiditate nihil? Corporis omnis modi cum necessitatibus.
            </p>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quia reprehenderit tenetur id doloribus ipsam hic sequi accusantium? Rerum nesciunt perspiciatis debitis tempore asperiores? Sed voluptatem omnis atque eum animi beatae vitae harum laboriosam, dolor, nisi expedita est distinctio dicta magni voluptatum fugit pariatur maiores, autem accusantium quos itaque error?
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et unde, ad dignissimos quisquam, at sint numquam inventore provident voluptate incidunt iusto aut asperiores? Ad, architecto perspiciatis praesentium repellendus maiores dolore officia alias dicta sed expedita cumque eum distinctio dolores. Libero.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  );
}

export default SinglePage;
