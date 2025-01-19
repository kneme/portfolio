import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Portfolio</h2>
      <Navbar />
    </header>
  );
};

export default Header;
