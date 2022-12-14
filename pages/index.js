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
        <div className={styles.title}>
          There is this new thing in your city.
        </div>
        <p
          style={{
            color: "black",
            opacity: "0.8",
            paddingTop: "10rem",
            textAlign: "center",
          }}
        >
          Coming Soon.
        </p>
      </main>
      <script
        async
        data-uid="174563484f"
        src="https://artisanal-producer-6695.ck.page/174563484f/index.js"
      ></script>
    </div>
  );
}
