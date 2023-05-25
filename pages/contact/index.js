import Head from "next/head";
import { Epilogue } from "next/font/google";
import HomeStyles from "../../styles/Home.module.css";
import styles from "../../styles/contact.module.css";
import Image from "next/image";
import john2 from "../../public/images/john2.png";
import john3 from "../../public/images/john3.png";
import john4 from "../../public/images/john4.png";
import Form from "@/components/form/form.component";
import {
  Behance_icon,
  Instagram_icon,
  LinkedIn_icon,
  Twitter_icon,
} from "@/components/icons/icons";
const epilogue = Epilogue({ subsets: ["latin"] });
const Contact = () => {
  return (
    <>
      <Head>
        <title>John Achimugu- Contact me</title>
        <meta name="description" content="John Achimugu-Contact me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${HomeStyles.main} ${epilogue.className}`}>
        <div className={styles.contact_wrapper}>
          <div className={styles.top_section}>
            <div className={styles.first_image_wrapper}>
              <Image src={john2} alt="image-1" className={styles.john2} />
            </div>
            <div className={styles.second_image_wrapper}>
              <Image src={john3} alt="image-3" className={styles.john3} />
              <Image src={john4} alt="image-2" className={styles.john4} />
            </div>
          </div>
          <div className={styles.bottom_section}>
            <div className={styles.text_section}>
              <div className={styles.title_container}>
                <h4>Let’s work together</h4>
              </div>
              <div className={styles.lets_connect}>
                <div className={styles.lets_connect_text_wrapper}>
                  <p>
                    Say hello at achimugunusa11@gmail.com For more info, here's
                    my resume. <br />
                    <br />
                    The best stories are told in person. Let's grab coffee and
                    chat!
                  </p>
                </div>

                <div className={styles.lets_connect_icons}>
                  <ul>
                    <li>
                      <Behance_icon size={23} className={styles.icon} />
                    </li>
                    <li>
                      <Instagram_icon size={23} className={styles.icon} />
                    </li>
                    <li>
                      <Twitter_icon size={23} className={styles.icon} />
                    </li>
                    <li>
                      <LinkedIn_icon size={23} className={styles.icon} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.form_section}>
              <Form />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
