import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <h1>First</h1>
        <Link href="/home">
          <a href="/home">home</a>
        </Link>
        <Link href="/second">
          <a href="/second">second link</a>
        </Link>
        <Link href="/dashboard">
          <a href="/dashboard">Dashboard Link</a>
        </Link>
      </Head>
    </div>
  );
}
