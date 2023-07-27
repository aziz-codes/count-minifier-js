const countMinifier = (count) => {
  let kth = count / 1000;
  let tenKth = count / 10000;
  let lacKth = count / 100000;
  let millKth = count / 1000000;
  let tenMlth = count / 10000000;

  if (count % 2 === 0) return kth + "k";
  return kth.toString().slice(0, -4) + "k";
};
console.log(countMinifier(4000));
