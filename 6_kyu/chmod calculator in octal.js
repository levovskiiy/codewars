// https://www.codewars.com/kata/57f4ccf0ab9a91c3d5000054
function chmodCalculator(perm) {
  let res = "";
  const { user, group, other } = perm;
  const permissionValues = [
    ["rwx", 7],
    ["rw-", 6],
    ["r-x", 5],
    ["r--", 4],
    ["-wx", 3],
    ["-w-", 2],
    ["--x", 1],
    ["---", 0],
  ];

  for (let key in { user, group, other }) {
    const currentGroup = perm[key];
    if (currentGroup) {
      for (const item of permissionValues) {
        if (item.includes(currentGroup)) {
          res += item[1];
        }
      }
    } else {
      res += 0;
    }
  }
  return res;
}
