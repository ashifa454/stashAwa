const parseUtils = {
  safeParse: num => {
    if (typeof num === "number") return Math.ceil(num);
    else {
      return 0;
    }
  }
};
export { parseUtils };
