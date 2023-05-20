import Image from "next/image";
import Button from "../button/button.component";
import NetCube from "../../public/images/net-cube.png";
import HalfEgg from "../../public/images/half-egg2.png"
import styles from "../../styles/Hero.module.css"
import { Behance_icon, Instagram_icon, LinkedIn_icon, Twitter_icon } from "../icons/icons";
const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.row}>
          <div className={styles.col}>
          <div className={styles.info} >
          <div className={styles.name_container}>
              <h1 className={styles.name}>John Achimugu</h1>
            </div>
            <div className={styles.description_container}>
              <p className={styles.description}>
                Passionate about solving design problems, visual <br/> storytelling
                and human-centered design
              </p>
            </div>

            <div className={styles.workplace_container}>
              <p className={styles.workplace}>
              Product Designer at Browiso
              </p>
            </div>
              <div className={styles.btn_container}>
              <Button btnText={"My Resume"} className={styles.resume_btn} />
              <Button btnText={`Let's connect`} className={styles.connect_btn} />
            </div>
          </div>

          
          </div>
          <div className={`${styles.col} ${styles.img_col}`}>
            <div className={styles.images_container} >
            <Image src={NetCube} className={styles.net_cube} />
            <Image src={HalfEgg}  className={styles.half_egg} />
            </div>

            <div className={styles.social_media_container} >
                <Behance_icon  size={20} className={styles.hero_icon} />
                <Instagram_icon  size={20} className={styles.hero_icon}/>
                <Twitter_icon  size={20} className={styles.hero_icon}/>
                <LinkedIn_icon  size={20} className={styles.hero_icon}/>

                <hr/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
