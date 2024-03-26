import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/compoments/featured/Featured";
import CategoryList from "@/compoments/categoryList/CategoryList";
import CardList from "@/compoments/cardList/CardList";
import Menu from "@/compoments/menu/Menu";


export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu/>
      </div>
    </div>
  );
}
