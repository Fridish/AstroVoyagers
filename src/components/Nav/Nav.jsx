import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import useWindowSize from "@hooks/useWindowSize";
import Hamburger from "@components/Hamburger/Hamburger";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 760 && showNav) {
      setShowNav(false);
    }
  }, [size.width, showNav]);

  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <nav role="navigation" className={styles.nav}>
      <div className={styles.header}>
        <Link to={"/"}>Astro Voyagers</Link>
        {size.width < 760 && (
          <Hamburger onClick={toggleNav} aria-expanded={showNav} />
        )}
      </div>
      <div
        className={`${styles.list} ${
          showNav && size.width < 760 ? styles.show : ""
        }`}
      >
        <Link onClick={toggleNav} to={"/rockets/falcon-1"}>
          Falcon 1
        </Link>
        <Link onClick={toggleNav} to={"/rockets/falcon-9"}>
          Falcon 9
        </Link>
        <Link onClick={toggleNav} to={"/rockets/falcon-heavy"}>
          Falcon Heavy
        </Link>
        <Link onClick={toggleNav} to={"/rockets/starship"}>
          Starship
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
