// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array
// Sample Input:

let sumArray = (arr : number []) => {
    let sum : number = arr.reduce((accumulator , cur)=>accumulator + cur, 0);
    // console.log(sum);
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Sample Output:
// 15;