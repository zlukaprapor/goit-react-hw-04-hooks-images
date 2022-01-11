function fetchImg(name, page) {
  const key = '18623540-b96dabcd57ccb87763c2123d9';
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Not pictures - ${name}`));
  });
}

const api = {
  fetchImg,
};

export default api;
