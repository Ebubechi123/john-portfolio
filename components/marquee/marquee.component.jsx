import styles from "../../styles/marquee.module.css";
import KeepUpCard from "../keep_up/keep_up_cards.component";
import { List } from "../keep_up/list";
import Marquee from "react-fast-marquee";
const MarqueeComponent = () => {
  return (
    <>
      <div className={styles.marquee_container}>
        <hr
          style={{
            height: "0px",
            border: "6px solid balck",
            width: "70%",
            borderStyle: "dashed",
            margin: "auto auto 43px auto",
          }}
        />
        <Marquee
          autofill={false}
          speed={150}
          className={styles.marquee}
        >
          Product Design/Visual Storytelling/Motion Design
        </Marquee>
        <hr
          style={{
            height: "0px",
            border: "6px solid balck",
            width: "70%",
            borderStyle: "dashed",
            margin: "43px auto auto auto",
          }}
        />
      </div>
    </>
  );
};

export default MarqueeComponent;

export const Keep_Up_Marquee = () => {
  return (
    <>
      <div className={styles.keep_up_marquee_container}>
        <Marquee autofill={false} speed={150}>
          {List.map(({ text, image, border }) => (
            <KeepUpCard image={image} text={text} border={border} />
          ))}
        </Marquee>
      </div>
    </>
  );
};
