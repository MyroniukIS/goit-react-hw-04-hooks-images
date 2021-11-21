import './App.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = inputValue => {
    setInputValue(inputValue);
  };

  const openLargeImage = largeImage => {
    setLargeImage(largeImage);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <Searchbar forSubmit={handleFormSubmit} />
      <ImageGallery inputValue={inputValue} toClick={openLargeImage} />

      <ToastContainer />
      {showModal && (
        <Modal forClose={toggleModal}>
          <img src={largeImage} alt={largeImage} />
        </Modal>
      )}
    </>
  );
}
