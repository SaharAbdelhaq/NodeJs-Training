// convert array to [2,4,6,8,10]
let arr1 = [1, 2, 3, 4, 5];
let newArr1 = arr1.map(x => x * 2).map((x, i) => i === arr1.length - 1 ? 0 : x);
console.log(newArr1);

// filter numbers that are more than 3
let arr2 = [1, 2, 3, 4, 5];
let newArr2 = arr2.map(x => x * 2).map((x, i) => i === arr2.length - 1 ? 0 : x).filter(x => x > 3);
console.log(newArr2);


//convert the array of integers to the following string "4-6-8-10"
let arr3 = [4, 6, 8, 10];
let newString = arr3.join("-");
console.log(newString);

//then convert the string "4-6-8-10" again to array of integers
let str = "4-6-8-10";
let newArr = str.split("-").map(Number);
console.log(newArr);

// sum them
let arr4 = [4, 6, 8, 10];
let sum = arr4.reduce((total, current) => total + current);
console.log(sum);