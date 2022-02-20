/* destructuring is to get demanding value from an object or an array through variabls;
in case of implementing destructuring some rules must be memorized
    1. In case of object destructuring variable worked based on property name
    2. name of the variables must be put in between { } second bracket in object destructuring
    3. property reference chain should be assign to the variables carefully
    
    4. In case of array destructuring variable worked based on element position
    5. index references should be assign to the variables maintaining serial carefully
    6. name of the variables must be put in between [ ] third bracket in array destructuring
*/


// ------------------------- object destructuring --------------------------
const identity = {
    name: 'Muhammad Nafis Abdullah',
    id: 'C181067',
    learning : [
        'html',
        {
            core: 'vanilla css',
            utilityFrameWork: 'tailwind',
            componentFrameWork: 'bootstrap',
        },
        {
            jsBasic: 'dom',
            frameWork : ['react','node','express'],
        }
    ]
};


const {name,id} = identity; // here declering variables are name & id are the property of identity object

const {core,utilityFrameWork,componentFrameWork} = identity.learning[1]; // here declering variables are core, utilityFrameWork & componentFrameWork are the property of index no 1 of learning and learning is the property of identity

const {jsBasic,frameWork} = identity.learning[2]; // here declering variables are jsBasic & frameWork are the property of index no 2 of learning and learning is the property of identity

console.log(identity);
console.log(`____________________`);
console.log(`
    name:${name},
    id:${id},
    markup:${identity.learning[0]},
    core:${core},
    utilityFrameWork:${utilityFrameWork},
    componentFrameWork:${componentFrameWork},
    jsBasic:${jsBasic},
    frameWork:${frameWork},
    `);
//--------------------------------------------------------------------------



// -------------------------- array destructuring --------------------------
const meWithLove=[
    ['Jaima','Wasir','Shashi'],
    'C191238',
    ['loitta fish','badha kopi'],
    24,
    ['Muhammad','Nafis','Abdullah'],
    'C181067',
    ['fulkopi','shutki alu'],
    24.5,
]

// here variable
const [[urFirstName,urMiddleName,urLastName],urId,[urPrioMach,urPrioSobji],urAge,[myFirstName,myMiddleName,myLastName],myId,[myPrioMach,myPrioSobji],myAge] = meWithLove;

console.log(`
    My Love Name: ${urFirstName,urMiddleName,urLastName},
    Her Id: ${urId},
    Her Favourite Torkari: ${urPrioMach,urPrioSobji},
    Her Age: ${urAge},
    My Name: ${myFirstName,myMiddleName,myLastName},
    My Id: ${myId},
    My Favourite Torkari: ${myPrioMach,myPrioSobji},
    My Age: ${myAge}
`);




// -------------------------- optional chaining --------------------------
//if reference chaining is not accurate , in this situation an error will happend; to avoid this error there is a way to use optional chaining by using '?' question mark just before the property name that will test/probably-uncertain; if the property chain contain the value correctly then it works as normal else it shows no value of the property that makes an error without showing an error message
console.log(`identity.name = ${identity.name}`);
console.log(`____________________`);
console.log(`identity.name.firstName = ${identity.name.firstName}`); // there is no firstName property of the name property of the identity object; so it shows undefined as output
console.log(`____________________`);

// console.log(`identity.name.firstName.firstLetter = ${identity.name.firstName.firstLetter}`);

/*  the console log of the upper line is muted; the line shows an error, unmute the line to check the error output of the line
    // there is no firstName property of the name property of the identity object; so it shows undefined as output; when it is time to see the value of firstLetter property of firstName then an error occurred that "Cannot read properties of undefined";
*/

console.log(`identity.name.firstName.firstLetter = ${identity.name.firstName?.firstLetter}`); // there is no firstName property of the name property of the identity object; so it shows undefined as output; when it is time to see the value of firstLetter property of firstName then an error occurred that "Cannot read properties of undefined"; to avoid this error put a '?' question mark just before the property name; if any value available of this property it will show the value otherwise it will not show any value or any error mssg