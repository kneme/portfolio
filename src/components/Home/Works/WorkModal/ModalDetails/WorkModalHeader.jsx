import PropTypes from "prop-types";

const ModalHeader = ({ title }) => {
  return <h2>{title}</h2>;
};

export default ModalHeader;

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
