export default {
  unique() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  },
  profileUnique() {
    return (
      "NEW" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
};
