import Header from "../../components/Header/Header";
import WorkSection from "../../components/Home/Works/WorkSection";
import EducationSection from "../../components/Home/Education/EducationSection";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>
          <span>Welcome! 👋 </span>
          <span>I&apos;m Ben - a passionate Web Developer </span>
          <span>exploring the digital world from </span>Reunion Island.
        </h1>
        <WorkSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
