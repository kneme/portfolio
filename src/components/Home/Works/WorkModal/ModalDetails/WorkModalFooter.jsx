import PropTypes from "prop-types";
import styles from "../WorkModal.module.scss";

const ModalFooter = ({ githubLink, workLink }) => {
  return (
    <div className={styles.linksContainer}>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i> Github
      </a>
      {workLink ? (
        <a href={workLink} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit
          website
        </a>
      ) : null}
    </div>
  );
};

export default ModalFooter;

ModalFooter.propTypes = {
  githubLink: PropTypes.string.isRequired,
  workLink: PropTypes.string,
};
