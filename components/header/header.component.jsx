import styles from "../../styles/Header.module.css"
import Hero from "../hero/hero.component";

const Header = () => {
    return ( 
        <header className={styles.header} >
            <Hero/>
        </header>
     );
}
 
export default Header;