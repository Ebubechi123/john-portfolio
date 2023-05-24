import styles from "../../styles/job.module.css"
const Job = ({ name, location, position, duration }) => {
  return (
    <>
      <div className={styles.job_container} >
        <div className={styles.job_info} >
          <p>
            {name}- <span>{location}</span>
          </p>
        </div>

        <div className={styles.job_position} >
          <p>{position}</p>
        </div>
        <div className={styles.job_duration} > 
          <p>{duration}</p>
        </div>
      </div>
    </>
  );
};

export default Job;
