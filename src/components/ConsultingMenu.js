import { useCallback, useState } from "react";
import styles from "./ConsultingMenu.module.css";

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
          <li className={styles.item}>나의 취향 스타일 진단</li>
          <li className={styles.item}>퍼스널 컬러 진단</li>
        </ul>
      )}
    </div>
  );
}

export default ConsultingMenu;
