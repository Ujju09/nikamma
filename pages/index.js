/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nikamma</title>
        <meta name="description" content="Feelin Good" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>There is this new thing in your city.</h1>
        <h3
          style={{
            color: "black",
            opacity: "0.8",
            paddingTop: "10rem",
          }}
        >
          Coming Soon.
        </h3>
      </main>
      <script
        async
        data-uid="174563484f"
        src="https://artisanal-producer-6695.ck.page/174563484f/index.js"
      ></script>
    </div>
  );
}
