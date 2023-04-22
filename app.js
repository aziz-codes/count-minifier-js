const countMinifier = (count) => {
  let kth = count / 1000;

  if (count % 2 === 0) return kth + "k";
  return kth.toString().slice(0, -4) + "k";
};
console.log(countMinifier(4000));
