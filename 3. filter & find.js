const number = [4, 45, 9, 16, 9, 25];
console.log(`Number array => `,number);
console.log(`____________________`);



// filter() function =>
const filterNumber = number.filter((value, index, array) => {
    return value>10;
});
// applying filter() method on number array it return some perameters to the user provided function which is set as a perameter of number.filter() function; the perameters can be used in the user define function according to need
// the perameters are (value, index, array)
console.log(`filter(array of element of number array that is greater than 10) return => `,filterNumber); // filter() function return an array, where returning value of the user define function is the item of the array that filter() function return
// according to this exercise, where other function return an array with item "true/false"; here filter() function return an array conatining the value of the number array which are able to pass the condition in the user provided function
console.log(`____________________`);
// --------------------------------------------------------------------------



// find() function =>
const numberFind = number.find((value, index, array)=>{
    return value > 18;
})
// applying find() function in number array it return some perameters to user provided function which is set as a perameter of number.find() function; the perameters can be used in the user define function according to need
// the perameters are (value, index, array)
console.log(`find(first array item that is greater than 18) return => ${numberFind}`); // find() function return the item of the array which is passed firstly the condition of the myFind() user define function
console.log(`____________________`);
// --------------------------------------------------------------------------