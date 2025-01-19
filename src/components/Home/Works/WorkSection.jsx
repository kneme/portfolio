import { useModal } from "../../../hooks/useModal";
import data from "../../../data/works.json";
import WorkModal from "./WorkModal/WorkModal";
import styles from "./WorkSection.module.scss";

const WorkSection = () => {
  const { openModal, closeModal, selectedWork } = useModal();
  return (
    <section id="work">
      <h2>Work</h2>
      <div className={styles.grid}>
        {data.map((work) => (
          <article key={work.id} className={styles.workCard}>
            <img
              src={work.image}
              alt={work.alt}
              onClick={() => openModal(work)}
            />
            <h3>{work.kind}</h3>
          </article>
        ))}
      </div>
      {selectedWork && <WorkModal work={selectedWork} onClose={closeModal} />}
    </section>
  );
};

export default WorkSection;
