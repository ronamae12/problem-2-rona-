let numbers = prompt("Enter a list of numbers, separated by commas:", "24, 65, 21, 5, 9, 32, 42, 80, 57").split(',').map(Number);

let names = prompt("Enter a list of names, separated by commas:", "Zenvo, Erica, Jordie, Alicia, Redon").split(',');


   console.log("Original numbers array:", numbers);

   console.log("Original names array:", names);


let mergedArray = numbers.concat(names);

   console.log("Merged array:", mergedArray);

let sortedNumbers = numbers.sort((a, b) => b - a);

   console.log("Sorted numbers (reverse order):", sortedNumbers);


let sortedNames = names.sort();
   console.log("Sorted names alphabetically:", sortedNames);