import { useCallback, useState } from "react";
import userIcon from "../assets/user.png";
import styles from "./UserMenu.module.css";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      className={styles.userMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={userIcon} alt="유저 메뉴" className={styles.icon} />
      {isOpen && (
        <ul
          className={styles.popup}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className={styles.item}>회원가입</li>
          <li className={styles.item}>로그인</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
