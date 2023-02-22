// 1) Create an array called numbers that contains the numbers 1 through 10.
const numbers = [1,2,3,4,5,6,7,8,9,10];

// 2) Using the push() method, add the number 11 to the end of the numbers array.
numbers.push(11);
console.log(numbers)

// 3) Using the pop() method, remove the last element from the numbers array.
numbers.pop();
console.log(numbers)


// 4) Using the unshift() method, add the number 0 to the beginning of the numbers array.
numbers.unshift(0);
console.log(numbers)


// 5) Using the shift() method, remove the first element from the numbers array.
numbers.shift();
console.log(numbers)


// 6) Using the slice() method, create a new array called subArray that contains the elements of the numbers array from index 3 to 5.
const subArray = numbers.slice(3,6);
console.log(subArray)

// 7) Using the concat() method, join the numbers array with another array called extraNumbers that contains the numbers 12 through 15.
const extraNumbers = numbers.concat([12,13,14,15])
console.log(extraNumbers)

// 8) Using the join() method, convert the numbers array into a string with each element separated by a comma.
const joinNumbers = numbers.join('/');
console.log(joinNumbers)


// 9) Using the reverse() method, reverse the order of the elements in the numbers array.
numbers.reverse();

// 10) Using the sort() method, sort the elements in the numbers array in ascending order.
numbers.sort((a, b) => a - b);
console.log(numbers);

// 11) Using the map() method, create a new array called doubledNumbers that contains each element in the numbers array multiplied by 2.
const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers)
// 12) Using the filter() method, create a new array called evenNumbers that contains only the even elements of the numbers array.
const evenNumbers = numbers.filter(num => num % 2 ===0);
console.log(evenNumbers)


