import PropTypes from "prop-types";
import styles from "../WorkModal.module.scss";
import ModalHeader from "./WorkModalHeader";
import ModalBody from "./WorkModalBody";
import ModalFooter from "./WorkModalFooter";

const ModalDetails = ({
  title,
  description,
  challenges,
  skills,
  githubLink,
  workLink,
}) => {
  return (
    <div className={styles.workDetails}>
      <ModalHeader title={title} />
      <ModalBody
        description={description}
        challenges={challenges}
        skills={skills}
      />
      <ModalFooter githubLink={githubLink} workLink={workLink} />
    </div>
  );
};

export default ModalDetails;

ModalDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  challenges: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  workLink: PropTypes.string,
};
