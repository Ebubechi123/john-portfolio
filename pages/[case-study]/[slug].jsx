import { useRouter } from "next/router";
import { Epilogue } from "next/font/google";
import HomeStyles from "../../styles/Home.module.css";
import styles from "../../styles/Case_study.module.css";
import Head from "next/head";
const epilogue = Epilogue({ subsets: ["latin"] });
const Case_Study = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Case Study-{router.query.slug}</title>
        <meta name="description" content="John Achimugu Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${HomeStyles.main} ${epilogue.className} ${styles.case_study_wrapper}`}
      ></main>
    </>
  );
};

export default Case_Study;
