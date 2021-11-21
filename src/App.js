import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    inputValue: '',
    largeImage: '',
    showModal: false,
  };

  handleFormSubmit = inputValue => {
    this.setState({ inputValue });
  };

  openLargeImage = largeImage => {
    this.setState({ largeImage, showModal: true });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { largeImage, showModal } = this.state;
    const toggleModal = this.toggleModal;
    const openLargeImage = this.openLargeImage;

    return (
      <>
        <Searchbar forSubmit={this.handleFormSubmit} />
        <ImageGallery
          inputValue={this.state.inputValue}
          toClick={openLargeImage}
        />

        <ToastContainer />
        {showModal && (
          <Modal forClose={toggleModal}>
            <img src={largeImage} alt={largeImage} />
          </Modal>
        )}
      </>
    );
  }
}
export default App;
