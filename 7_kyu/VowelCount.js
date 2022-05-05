const getCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((v) => vowels.includes(v)).length;
};
