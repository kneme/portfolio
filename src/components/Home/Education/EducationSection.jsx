import data from "../../../data/education.json";
import Education from "./Education";
import styles from "./Education.module.scss";

const EducationSection = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className={styles.container}>
        <Education
          title="Diplomas"
          data={data.filter((item) => item.kind === "diploma")}
          isDiploma={true}
        />
        <Education
          title="Certifications"
          data={data.filter((item) => item.kind === "certification")}
        />
      </div>
    </section>
  );
};

export default EducationSection;
