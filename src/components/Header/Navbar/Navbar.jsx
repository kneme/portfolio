import styles from "./Navbar.module.scss";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
