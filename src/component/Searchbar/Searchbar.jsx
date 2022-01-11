import { Component } from 'react';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    imgName: '',
  };

  handleNameChange = (event) => {
    this.setState({ imgName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.imgName.trim() === '') {
      toast.error('Enter the name of the picture.');
      return;
    }

    this.props.onSubmit(this.state.imgName);
    this.setState({ imgName: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>GO</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images and photos"
            name="imgName"
            value={this.state.imgName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
