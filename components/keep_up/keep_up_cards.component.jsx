import styles from "../../styles/keep_up.module.css";
import Image from "next/image";
const KeepUpCard = ({ image, text, border }) => {
  return (
    <>
      <div className={styles.keep_up_card}>
        <div className={styles.keep_up_card_image_container}>
          <Image
            className={styles.keep_up_card_image}
            src={image}
            width={380.04}
            height={380}
            style={{
              border: border ? "5px solid black" : "none",
              borderStyle:'dashed',
            }}
          />
        </div>
        <div className={styles.keep_up_card_text_container}>
          <p className={styles.keep_up_card_text}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default KeepUpCard;
