const parseUtils = {
  safeParse: num => {
    if (typeof num === "number") return Math.ceil(num);
    else {
      return 0;
    }
  },
  parseNanStr: str => {
    if (str.toLowerCase() !== "NAN".toLowerCase()) return str;
    else {
      return "Not Available";
    }
  }
};
export { parseUtils };
