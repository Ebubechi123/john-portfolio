import Head from "next/head";
import { Epilogue } from 'next/font/google'
import styles from "../../styles/Home.module.css"
const epilogue = Epilogue({ subsets: ['latin'] })
const Contact = () => {
  return (
    <>
      <Head>
        <title>John Achimugu- Contact me</title>
        <meta name="description" content="John Achimugu-Contact me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${epilogue.className}`}>
        <p>Contact</p>
      </main>
    </>
  );
};

export default Contact;
