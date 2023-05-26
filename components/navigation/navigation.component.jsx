import styles from "../../styles/Navigation.module.css";
import Link from "next/link";
import { Epilogue } from "next/font/google";
import { useRouter } from "next/router";
import { NavLinks } from "./navLinks";
import { Close_Icon, Menu_Icon } from "../icons/icons";
import { useState } from "react";
const epilogue = Epilogue({ subsets: ["latin"] });
const Navigation = () => {
  const router = useRouter();
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <nav className={`${styles.nav} ${epilogue.className}`}>
        <div className={styles.logo_container}>
          <p className={styles.logo}>John Achimugu</p>
        </div>
        <div
          className={toggleNav ? styles.active_nav : styles.nav_links_wrapper}
        >
          <ul>
            {NavLinks.map(({ path, name }) => (
              <Link
                href={path}
                onClick={() => {
                  setToggleNav(false);
                }}
              >
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

        <div className={styles.menu_icon_container}>
          {toggleNav ? (
            <Close_Icon
              onClick={() => {
                setToggleNav(false);
              }}
              className={styles.menu_icon}
            />
          ) : (
            <Menu_Icon
              onClick={() => {
                setToggleNav(true);
              }}
              className={styles.menu_icon}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
