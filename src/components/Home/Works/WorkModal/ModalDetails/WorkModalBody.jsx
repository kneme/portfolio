import PropTypes from "prop-types";
import styles from "../WorkModal.module.scss";

const ModalBody = ({ description, challenges, skills }) => {
  return (
    <div className={styles.textBox}>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Challenges</h3>
      <p>{challenges}</p>
      <h3>Skills</h3>
      <p>{skills}</p>
    </div>
  );
};

export default ModalBody;

ModalBody.propTypes = {
  description: PropTypes.string.isRequired,
  challenges: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
};
