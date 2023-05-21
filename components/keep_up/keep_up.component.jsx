import styles from "../../styles/keep_up.module.css";
import { Keep_Up_Marquee } from "../marquee/marquee.component";
import KeepUpCards from "./keep_up_cards.component";

const Keep_Up = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <p className={styles.title}>Keep up with me </p>
        </div>
        <div className={styles.description_wrapper} >
          <p className={styles.description} >
            Check out some resources that will give you more information about
            me and my projects. Let’s get to know each other work other!
          </p>
        </div>

       <Keep_Up_Marquee/>
      </div>
    </>
  );
};

export default Keep_Up;
