import Head from "next/head";
import { Epilogue } from "next/font/google";
import HomeStyles from "../../styles/Home.module.css";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import john1 from "../../public/images/john1.png";
import experience from "../../public/images/experience.png";
import education from "../../public/images/educationLine.png";
import { Jobs } from "./jobs";
import Job from "@/components/job/job";
import { educationList } from "./education_list";
import Education from "@/components/education/education";
const epilogue = Epilogue({ subsets: ["latin"] });
const About = () => {
  return (
    <>
      <Head>
        <title>John Achimugu- About me</title>
        <meta name="description" content="John Achimugu Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${HomeStyles.main} ${epilogue.className} ${styles.about_wrapper}`}
      >
        <section className={styles.top_section}>
          <section className={styles.image_section}>
            <Image src={john1} className={styles.image} />
          </section>

          <section className={styles.article_section}>
            <div className={styles.title_wrapper}>
              <h3 className={styles.title}>Hello, I’m John! </h3>
            </div>
            <article className={styles.article}>
              I'm a visual and product designer. I bring a multidisciplinary,
              human-centered approach and a growth mindset into my design
              process and craft. Outside of work and school, I'm always looking
              for new ways to make myself better and explore this big, amazing
              world. In whatever context, I am eager to learn new skills and
              empathize with diverse methods to build meaningful solutions with
              purpose and impact. <br />
              <br /> My primary goal is to provide a rich engaging and
              innovative user experience to the user. I am proficient at
              designing systems, applying design research and strategy to solve
              complex problems. <br /> <br /> I am self-aware of the impact our
              solutions have on people's lives, and this is the reason why I
              always give my best to create a seamless and delightful
              experience. <br /> <br /> When I'm not designing, you can find me
              exploring amazing systems (3d modeling, gaming, animating, etc.),
              watching nature documentaries, podcasts, listening to music genres
              with Hiphop, Pop, R&B, indie alternative influence, watching TV
              series and animes.
            </article>
            <div className={styles.lets_connect}>
              <p>
                If you have similar interests or just want to connect, let’s
                <br />
                <span>chat!</span> You can download my <span>resume here.</span>
              </p>
            </div>
          </section>
        </section>

        <section className={styles.bottom_section}>
          <section className={styles.work_experience_section}>
            <div className={styles.bottom_section_title_wrapper}>
              <h4>Work Experience</h4>
              <Image src={experience} className={styles.experience_image} />
            </div>

            {Jobs.map(({ name, position, duration, location }) => (
              <Job
                name={name}
                position={position}
                duration={duration}
                location={location}
              />
            ))}
          </section>
          <section className={styles.education_section}>
            <div className={styles.bottom_section_title_wrapper}>
              <h4>Education</h4>
              <Image src={education} className={styles.education_image} />
            </div>

            {educationList.map(({ institution, degree, duration }) => (
              <Education
                institution={institution}
                degree={degree}
                duration={duration}
              />
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default About;
