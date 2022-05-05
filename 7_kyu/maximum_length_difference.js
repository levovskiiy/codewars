const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  let x = a1.map((str) => str.length);
  let y = a2.map((str) => str.length);
  return Math.max(
    Math.max(...x) - Math.min(...y),
    Math.max(...y) - Math.min(...x)
  );
};
