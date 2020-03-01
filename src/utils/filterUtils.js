const filterUtils = {
  filterByTitle: (srcObject, title) => {
    if (title.length === 0) {
      return srcObject;
    }
    return srcObject.filter(item => {
      return item.Brand.toLowerCase().includes(title.toLowerCase());
    });
  },
  filterByCountry: (srcObject, country) => {
    if (country.length === 0) {
      return srcObject;
    }
    return srcObject.filter(item => {
      return item.Country.toLowerCase().includes(country.toLowerCase());
    });
  },
  filterByVariety: (srcObject, variety) => {
    if (variety.length === 0) {
      return srcObject;
    }
    return srcObject.filter(item => {
      return item.Variety.toLowerCase().includes(variety.toLowerCase());
    });
  }
};
export { filterUtils };
