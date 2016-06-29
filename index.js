module.exports = function nmap(n, map) {
  var result = new Array(n);

  for (var i = 0; i < n; i++) {
    result[i] = map(result[i], i, result);
  }

  return result;
};
