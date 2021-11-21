import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

export default function ResolvedView({ images, toClick, onClick }) {
  return (
    <div className={styles.thumb}>
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <li key={image.webformatURL} className={styles.ImageGalleryItem}>
            <ImageGalleryItem
              image={image.webformatURL}
              tags={image.tags}
              largeImage={image.largeImageURL}
              toClick={toClick}
            />
          </li>
        ))}
      </ul>
      <Button type="button" onClick={onClick}>
        Load more
      </Button>
    </div>
  );
}

ResolvedView.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  toClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
