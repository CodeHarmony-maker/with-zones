import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>DASHBOARD</h1>
      <ul>
        <li>
          <Link href="/second">
            <a>second</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
