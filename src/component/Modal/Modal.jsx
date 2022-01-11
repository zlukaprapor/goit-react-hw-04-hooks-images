import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeydownClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydownClick);
  }

  onKeydownClick = (e) => {
    const { onCloseModal } = this.props;
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  render() {
    const { children, onCloseModal } = this.props;
    return (
      <div className={styles.Overlay} onClick={onCloseModal}>
        <div className={styles.Modal}>{children}</div>
      </div>
    );
  }
}
