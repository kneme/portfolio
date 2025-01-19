import PropTypes from "prop-types";
import styles from "./WorkModal.module.scss";

const ModalCloseBtn = ({ onClose }) => {
  return (
    <button onClick={onClose} className={styles.closeButton}>
      <i className="fa-solid fa-xmark"></i>
      <span>Close button</span>
    </button>
  );
};

export default ModalCloseBtn;

ModalCloseBtn.propTypes = {
  onClose: PropTypes.func.isRequired,
};
