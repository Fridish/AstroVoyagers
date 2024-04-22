import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import useWindowSize from "@hooks/useWindowSize";
import Hamburger from "@components/Hamburger/Hamburger";
import Logo from "../../../public/logo.svg?react";

const List = ({ onClick }) => {
  return (
    <>
      <Link onClick={onClick} to={"/rockets/falcon-1"}>
        Falcon 1
      </Link>
      <Link onClick={onClick} to={"/rockets/falcon-9"}>
        Falcon 9
      </Link>
      <Link onClick={onClick} to={"/rockets/falcon-heavy"}>
        Falcon Heavy
      </Link>
      <Link onClick={onClick} to={"/rockets/starship"}>
        Starship
      </Link>
    </>
  );
};

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const close = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 760 && showNav) {
      setShowNav(false);
      setShowClose(false);
    }
  }, [size.width, showNav]);

  const toggleNav = (show) => {
    setShowNav(show);

    if (!close.current) return;

    if (show) {
      setShowClose(show);
      setTimeout(() => {
        close.current.style.opacity = 1;
      }, 10);
    } else {
      close.current.style.opacity = 0;
      setTimeout(() => {
        setShowClose(show);
      }, 400);
    }
  };

  const getNavWidth = () => {
    return size.width < 400 ? `${size.width}px` : "400px";
  };

  return (
    <nav role="navigation" className={styles.nav}>
      <div className={styles.header}>
        <Link onClick={() => toggleNav(false)} to={"/"}>
          <Logo className={styles.logo} />
        </Link>
        {size.width < 760 ? (
          <Hamburger
            onClick={() => toggleNav(!showNav)}
            aria-expanded={showNav}
          />
        ) : (
          <div className={styles.horizontal}>
            <List />
          </div>
        )}
      </div>
      {size.width < 760 && (
        <div
          className={styles.side}
          style={{ width: showNav ? getNavWidth() : 0 }}
        >
          <div
            ref={close}
            onClick={() => toggleNav(false)}
            style={{ display: showClose ? "block" : "none" }}
            className={styles.closeSide}
          />
          <div
            className={`${styles.background} ${showNav ? styles.skew : ""}`}
          />
          <div className={`${styles.verticle} ${showNav ? styles.show : ""}`}>
            <List onClick={() => toggleNav(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
