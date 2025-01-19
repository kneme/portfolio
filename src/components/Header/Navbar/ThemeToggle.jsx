import { useTheme } from "../../../hooks/useTheme.js";
import styles from "./Navbar.module.scss";

const ThemeToggle = () => {
  const { isLightMode, toggleLightMode } = useTheme();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleLightMode();
    }
  };
  return (
    <li
      className={styles.themeToggle}
      onClick={toggleLightMode}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className={`${styles.iconContainer} ${
          isLightMode ? "" : styles.locked
        }`}
      >
        <i className="fa-solid fa-moon"></i>
        <i className="fa-solid fa-sun"></i>
      </div>
    </li>
  );
};

export default ThemeToggle;
