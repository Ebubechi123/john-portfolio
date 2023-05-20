import Head from 'next/head'
import Image from 'next/image'
import { Epilogue } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header/header.component'

const epilogue = Epilogue({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>John Achimugu</title>
        <meta name="description" content="John Achimugu Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${epilogue.className}`}>
        <Header/>
      </main>
    </>
  )
}
