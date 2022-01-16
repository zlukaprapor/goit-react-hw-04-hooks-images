import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.css";
import imgApi from "./services";
import Searchbar from "./component/Searchbar";
import ImageGallery from "./component/ImageGallery";
import Load from "./component/Loader";
import Button from "./component/Button";
import Modal from "./component/Modal";

export default function App() {
  const [imgName, setImgName] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImages, setCurrentImages] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!imgName) return;

    const fetchImages = async () => {
      loaderToggle();

      return imgApi
        .fetchImg(imgName, page)
        .then((images) =>
          setImages((prevState) => [...prevState, ...images.hits])
        )
        .finally(() => loaderToggle());
    };
    fetchImages();
  }, [imgName, page]);

  const scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: "smooth",
      });
    }, 800);
  };

  const hendleFormSubmit = (imgName) => {
    setImgName(imgName);
    setPage(1);
    setImages([]);
  };

  const OnLoadMore = () => {
    setPage((prev) => prev + 1);
    if (imgName) {
      loaderToggle();
      scrollPage();
      loaderToggle();
    }
  };

  const loaderToggle = () => {
    setIsLoading((prev) => !prev);
  };

  const onImgClick = (e) => {
    if (e.target.nodeName !== "IMG") {
      return;
    }
    setCurrentImages(e.target.dataset.img);
    toggleModal();
  };

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={hendleFormSubmit} />
      <ImageGallery images={images} onImgClick={onImgClick} />
      {isLoading && <Load />}
      {images.length > 0 && !isLoading && (
        <Button onBtnClick={OnLoadMore} text={"Download more"} />
      )}
      <ToastContainer autoClose={3000} />

      {openModal && (
        <Modal onCloseModal={toggleModal}>
          <img src={currentImages} alt="Dont Worry Be Happy" />
        </Modal>
      )}
    </div>
  );
}

// class OldApp extends Component {
//   state = {
//     imgName: '',
//     page: 1,
//     images: [],
//     error: null,
//     isLoading: false,
//     // shouldScroll: false,
//     currentImages: '',
//     openModal: false,
//   };
