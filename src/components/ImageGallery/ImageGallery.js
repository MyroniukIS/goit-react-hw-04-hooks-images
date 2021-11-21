import { Component } from 'react';
import PropTypes from 'prop-types';

import fetchImages from '../../APIservice/api';
import IdleView from './IdleView';
import PendingView from './PendingView';
import RejectedView from './RejectedView';
import ResolvedView from './ResolvedView';

class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.inputValue;
    const prevPage = prevState.page;
    const nextName = this.props.inputValue;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ page: 1, status: 'pending' });

      fetchImages(nextName, nextPage)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      fetchImages(prevName, nextPage)
        .then(images =>
          this.setState({
            images: [...prevState.images, ...images],
            status: 'resolved',
          }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, error, status } = this.state;

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
          toClick={this.props.toClick}
          onClick={this.loadMoreImages}
        />
      );
    }
  }
}

ImageGallery.propTypes = {
  inputValue: PropTypes.string.isRequired,
  toClick: PropTypes.func.isRequired,
};

export default ImageGallery;
