const FetchUtils = {
  get: url => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        mode: "no-cors"
      })
        .then(res => res.text())
        .then(
          result => {
            resolve(result ? JSON.parse(result) : []);
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
