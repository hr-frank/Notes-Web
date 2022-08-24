import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'
import Intro from '../Components/Intro'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>H4U</title>
        <meta name="description" content="Best Health for You" />
      </Head>
      <Intro/>
      
      
      
      
    </div>
  )
}
