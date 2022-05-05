function strCount(str, letter) {
  return str
    .split("")
    .reduce((prev, curr) => (curr === letter ? prev + 1 : prev + 0), 0);
}
