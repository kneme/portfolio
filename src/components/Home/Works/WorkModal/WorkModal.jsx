import PropTypes from "prop-types";
import ModalCloseBtn from "./ModalCloseBtn";
import ModalDetails from "./ModalDetails/WorkModalDetails";
import styles from "./WorkModal.module.scss";

const WorkModal = ({ work, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={work.image} alt={work.alt} className={styles.workImage} />
        <ModalDetails
          title={work.title}
          description={work.description}
          challenges={work.challenges}
          skills={work.skills.join(", ")}
          githubLink={work.githubLink}
          workLink={work.link}
        />
        <ModalCloseBtn onClose={onClose} />
      </div>
    </div>
  );
};

WorkModal.propTypes = {
  work: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    challenges: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    link: PropTypes.string,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WorkModal;
