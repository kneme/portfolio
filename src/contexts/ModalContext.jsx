import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setSelectedWork(null);
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, selectedWork, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
