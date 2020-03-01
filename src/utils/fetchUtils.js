const FetchUtils = {
  get: url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(
          result => {
            resolve(result);
          },
          err => {
            console.log(err);
            reject(err);
          }
        );
    });
  },
  loadingState: {
    LOADING: 0,
    SUCCESS: 1,
    FAILURE: -1
  }
};
export { FetchUtils };
