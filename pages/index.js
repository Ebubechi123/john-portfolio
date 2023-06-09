import Head from 'next/head'
import Image from 'next/image'
import { Epilogue } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header/header.component'
import Marquee from '@/components/marquee/marquee.component'
import Works from '@/components/works/works.component'
import Keep_Up from '@/components/keep_up/keep_up.component'

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
        <Marquee/>
        <Works/>
        <Keep_Up/>
      </main>
    </>
  )
}
