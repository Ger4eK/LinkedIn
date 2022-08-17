import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('dropIn');
  const value = [modalOpen, modalType, setModalOpen, setModalType];
  return <ModalContext.Provider value={value} {...props} />;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useCount must be used within a ModalProvider');
  }
  return context;
};
