import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchImages from '../../APIservice/api';
import IdleView from './IdleView';
import PendingView from './PendingView';
import RejectedView from './RejectedView';
import ResolvedView from './ResolvedView';

export default function ImageGallery({ inputValue, toClick }) {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (inputValue === '') {
      return;
    }

    setImages([]);
    setPage(1);
    setStatus('idle');

    fetchImages(inputValue)
      .then(images => {
        setImages(images);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [inputValue]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    setStatus('pending');

    fetchImages(inputValue, page)
      .then(images => {
        setImages(prevState => [...prevState, ...images]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [page]);

  const loadMoreImages = () => {
    setPage(prevpage => prevpage + 1);
  };

  if (status === 'idle') {
    return <IdleView />;
  }

  if (status === 'pending') {
    return <PendingView />;
  }

  if (status === 'rejected') {
    return <RejectedView message={error.message} />;
  }

  if ((status === 'resolved') !== []) {
    return (
      <ResolvedView
        images={images}
        toClick={toClick}
        onClick={loadMoreImages}
      />
    );
  }
}

ImageGallery.propTypes = {
  inputValue: PropTypes.string.isRequired,
  toClick: PropTypes.func.isRequired,
};
