module.exports = ({ coverage }, data) => {
  return coverage
    ? data + 'coverage'
    : data
}