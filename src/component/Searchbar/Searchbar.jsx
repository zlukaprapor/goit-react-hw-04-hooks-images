import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

export default function Searchbar({ onSubmit }) {
  const [imgName, setImgName] = useState("");

  const handleNameChange = (event) => {
    setImgName(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (imgName.trim() === "") {
      toast.error("Enter the name of the picture.");
      return;
    }

    onSubmit(imgName);
    setImgName("");
  };

  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>GO</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          placeholder="Search images and photos"
          name="imgName"
          value={imgName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
