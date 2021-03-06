import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video width="100%" height="100%" preload="auto" autoplay="true" loop="true" muted="muted" >
          <source src="/house.mp4" type="video/mp4"/>
      </video>

    </div>
  )
}
