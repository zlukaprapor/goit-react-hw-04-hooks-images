import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, src, largeImg }) => (
  <li className={styles.ImageGalleryItem} key={id}>
    <img
      src={src}
      alt=""
      className={styles.ImageGalleryItemImage}
      data-img={largeImg}
      height="240"
      width="320"
    />
  </li>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
