import styles from "../../styles/marquee.module.css";

const Marquee = () => {
  return (
    <>
      <div className={styles.marquee_container}>
        <marquee
          width="100%"
          direction="left"
          height="100px"
          scrollamount="8.5"
          behavior={'sliding'}
         className={styles.marquee}
        >
          Product Design/Visual Storytelling/Motion Design
        </marquee>
      </div>
    </>
  );
};

export default Marquee;
