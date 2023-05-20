import Image from "next/image";
import styles from "../../styles/works.module.css"
// import T from "../../public/images/Trackack Work card.png"
import { imagesList } from "./images";
const Works = () => {
    return ( 
        <>
        <div className={styles.wrapper} >
            <div className={styles.title_container} >
                <h5 className={styles.title} >Works</h5>
            </div>

            <div className={styles.work_image_wrapper} >
                {imagesList.map(({image})=>(
                    <Image className={styles.img}  src={image} />
                ))}
            </div>
        </div>
        </>
     );
}
 
export default Works;