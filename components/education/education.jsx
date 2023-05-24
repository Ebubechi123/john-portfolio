import styles from "../../styles/education.module.css"
const Education = ({ institution, degree,duration }) => {
  return (
    <>
      <div className={styles.education_container} >
        <div className={styles.education_info} >
          <p>
            {institution}
          </p>
        </div>

        <div className={styles.education_degree} >
          <p>{degree}</p>
        </div>
        <div className={styles.education_duration} > 
          <p>{duration}</p>
        </div>
      </div>
    </>
  );
};

export default Education;
