
import styles from "../../styles/footer.module.css"
import { Behance_icon, Instagram_icon, LinkedIn_icon, Twitter_icon } from "../icons/icons";
const Footer = () => {
    return ( 
        <>
        
       <div className={styles.footer_wrapper}>
       <footer className={styles.footer} >
        <div className={styles.social_icons_wrapper} >
        <ul className={styles.social_icons_container}>
            <li><Behance_icon/></li>
            <li>
                <Instagram_icon/>
            </li>
            <li>
                <Twitter_icon/>
            </li>
            <li>
                <LinkedIn_icon/>
            </li>
        </ul>
        </div>

        <div className={styles.lower_section} >
        <p className={styles.copyright_text} >Copyright ©2022 John Achimugu</p>
        <p className={styles.site_builder} >Built by Ebubechi Ihediwa</p>
        </div>
        </footer>
       </div>
        </>
     );
}
 
export default Footer;