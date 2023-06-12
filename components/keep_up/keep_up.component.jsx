import Image from "next/image";
import styles from "../../styles/keep_up.module.css";
import { Keep_Up_Marquee } from "../marquee/marquee.component";
import KeepUpCards from "./keep_up_cards.component";
import Button from "../button/button.component";
import articleImage from "../../public/images/design.png"
import photoImage from "../../public/images/camera.png"
import starImage from "../../public/images/Star.png"
import { ArrorRigth_Icon, Down_Icon } from "../icons/icons";
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

       <div className={styles.cards_container} >
        <div className={styles.articles_card} >
        <Image src={articleImage} className={styles.articles_card_img}  />
        <Image src={starImage} className={styles.star}  />
        <p className={styles.articles_text} >Check out some of my Articles </p>
        <Button btnText={["Read",<ArrorRigth_Icon size={32} />]} className={styles.articles_btn} />
        <Down_Icon size={9} color={'#fff'} className={styles.one} />
        <Down_Icon size={9} color={'#fff'} className={styles.two}/>
        <Down_Icon size={9} color={'#fff'} className={styles.three}/>
        <Down_Icon size={9} color={'#fff'} className={styles.four}/>
        <Down_Icon size={9} color={'#fff'} className={styles.five}/>
        </div>
        <div className={styles.photography} >
      <Image src={photoImage} width={'100%'} height={540} />
      <p className={styles.photography_text}>
      Photography
      </p>
        </div>
        
       </div>
      </div>
    </>
  );
};

export default Keep_Up;
