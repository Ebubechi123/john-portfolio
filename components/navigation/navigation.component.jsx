import styles from "../../styles/Navigation.module.css";
import Link from "next/link";
import { Epilogue } from "next/font/google";
import { useRouter } from "next/router";
import { NavLinks } from "./navLinks";
const epilogue = Epilogue({ subsets: ["latin"] });
const Navigation = () => {
  const router = useRouter();
  return (
    <>
      <nav className={`${styles.nav} ${epilogue.className}`}>
        <div className={styles.logo_container}>
          <p className={styles.logo}>John Achimugu</p>
        </div>
        <div className={styles.nav_links_wrapper}>
          <ul>
            {NavLinks.map(({ path, name }) => (
              <Link href={path}>
                <li
                  className={
                    router.asPath === path ? styles.active : styles.links
                  }
                >
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
