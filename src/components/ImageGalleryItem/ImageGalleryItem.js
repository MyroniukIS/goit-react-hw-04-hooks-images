import styles from './ImageGalleryItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, tags, largeImage, toClick }) => {
  return (
    <img
      src={image}
      alt={tags}
      onClick={() => toClick(largeImage)}
      className={styles.ImageGalleryItemImage}
    />
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
