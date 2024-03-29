import React from "react";
import styles from "./loginPage.module.css"
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Login with a Google </div>
        <div className={styles.socialButton}>Login with a Github </div>
        <div className={styles.socialButton}>Login with a Facebook </div>
      </div>
    </div>
  );
};

export default Login;
