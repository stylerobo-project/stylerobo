/*
import { useCallback, useState } from "react";
import styles from "./ConsultingMenu.module.css";
import { Link } from "react-router-dom";

function ConsultingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      className={styles.ConsultingMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className={styles.icon}>Consulting</a>
      {isOpen && (
        <ul
          className={styles.popup}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className={styles.item}>
            <Link to="/favorite">나의 취향 스타일 진단</Link>
          </li>
          <li className={styles.item}>
            <Link to="/personal-color">퍼스널 컬러 진단</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ConsultingMenu;
*/

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsultingMenu.module.css";

function ConsultingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navtoFav = () => {
    navigate("/consulting/favorite");
  };

  const navtoPersonal = () => {
    navigate("/consulting/personal-color-main");
  };

  return (
    <div
      className={styles.ConsultingMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className={styles.icon}>Consulting</a>
      {isOpen && (
        <ul
          className={styles.popup}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className={styles.item} onClick={navtoFav}>
            <></>나의 취향 스타일 진단
          </li>
          <li className={styles.item} onClick={navtoPersonal}>
            퍼스널 컬러 진단
          </li>
        </ul>
      )}
    </div>
  );
}

export default ConsultingMenu;
