const number = [4, 45, 9, 16, 9, 25];

// applying map() function in number array it return some perameters to a user provided function which is set as a perameter of number.map() function; the perameters can be used in the user define function according to need; map() function return an array, where each array element is the returning value of the provided function.
// the perameters getting from map() are (value, index, array)
const arrayMap = number.map((value,index,array)=>{
    return `index[${index}] = ${value}`;
})
console.log(number);
console.log(arrayMap);
console.log(`____________________`);



const product=[
    {name:'mobile',brand:'oneplus',model:'9r',price:36500},
    {name:'laptop',brand:'hp',model:'pavillion 15',price:63000},
    {name:'headphone',brand:'lenovo',model:'he05x',price:550},
]
const productDetails = product.map((value,index,array)=>{
    return `${value.name}, ${value.brand} ${value.model}, ${value.price}`;
})
console.log(productDetails);
console.log(`____________________`);




// applying forEach() function in number array it return some perameters to the provided function which is an user define function which is set as a perameter of number.forEach() function; the perameters can be used in the user define function according to need
// the perameters are (value, index, array)
const numberForEach=number.forEach((value,index,array)=>{
    console.log(`${index} => ${value}`);
})

console.log(`forEach() return => ${numberForEach}`); // forEach() function return "undefined"
console.log(`____________________`);
// --------------------------------------------------------------------------