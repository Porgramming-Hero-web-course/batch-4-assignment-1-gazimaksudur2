let removeDuplicates = (arr: number[]) => {
  let newArr: number[] = [];
  arr.forEach((each) => {
    if (!newArr.includes(each)) {
      newArr.push(each);
    }
  });
  return newArr;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 0, 10, 0, 0 , 10, 11]));
