let sumArray = (arr : number []) => {
    let sum : number = arr.reduce((accumulator , cur)=>accumulator + cur, 0);
    // console.log(sum);
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));