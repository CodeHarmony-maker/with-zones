import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>DASHBOARD</h1>
      {/* <ul>
        <li>
          <Link href="/dashboard/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul> */}
    </div>
  )
}
