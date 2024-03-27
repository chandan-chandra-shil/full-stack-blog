import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPosts/MenuPosts";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
function Menu() {
  return (
    <div className={styles.container}>
      {/* MOST POPULAR SECTION START HERE  */}
      <h2 className={styles.subtitle}>What is hot</h2>
      <h1 className={styles.title}>Most popular</h1>
      <MenuPosts withImage={false} />
      {/* MOST POPULAR SECTION END  HERE  */}

      {/* CATEGORIES SECTION START HERE  */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>

      <MenuCategories/>

      {/* CATEGORIES SECTION ENF HERE  */}

      {/* EDITORS PICK SECTION START HERE  */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
      {/* EDITORS PICK SECTION END HERE  */}
    </div>
  );
}

export default Menu;
