import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dec there!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill alt="" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ex.
          </h1>
          <p className={styles.postDoc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            molestias nisi, modi veritatis quidem minus voluptatem tenetur rem
            excepturi similique? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam, qui in eveniet quidem possimus eum minus
            omnis accusamus officiis. Rem autem repellat quis molestiae modi,
            omnis harum itaque cum minus ratione veritatis incidunt asperiores
            doloribus vero debitis eligendi eius amet quidem nisi repellendus
            perferendis. Suscipit enim corrupti neque deleniti asperiores!
          </p>
          <button className={styles.button}>Read More </button>
        </div>
      </div>
    </div>
  );
}

export default Featured