/* 
    1. JavaScript Classes are templates for JavaScript Objects. decleration of a js class is given below:
    class ClassName {
        -------;
        ---;
        ------;
        consturctor(perameter1,perameter3,perameter3,. . .){
            
        }
    }

    2. In case of declering a js class, one constructor function must be added into the class. The constructor function can be able to set the value of a property of the class through variable that are passed as a perameter of constructor function.

    3. Setting the value of property from the given perameter is like :
                constructor(perameter1,perameter2,perameter3,. . .){
                    this.propertyName1 = perameter1;
                    this.propertyName2 = perameter2;
                    this.propertyName3 = perameter3;
                }
*/

class Info {
    constructor(name,id,age){
        this.name=name;
        this.id=id;
        this.age=age;
        // [this.name,this.id,this.age]=[name,id,age];
    }

    details(){
        console.log(`=> My name is ${this.name};\n=> My Id: ${this.id}.\n=> I'am ${this.age} years old.`);
    }
}

const me = new Info('Nafis','C181067',24.5); // declering a new object named me, 'new' keyword used before the ClassName; and class perameter should be given and the constructor function of Info class processed the perameter according to it's body
const shashi = new Info('Shashi','C191238',24);

// me.details();
// shashi.details();



// ---------------------------------------------------------------------------------------------------------



/* 
    Inheritence:
    If there is any need to inherite any property or method to a class(ChildClass) from another class(ParentClass), then the system of inherite the property/method from ParentClass to ChildClass is called inheritence. To inherite the new class from the common class the system of writing inheritence is :
    
    1. write 'extends' keyword between NewClasse 
    class ChildClass extends ParentClass{
        ------;
        ---;
        ---------;
    }

    2. If ChildClass need to declere new property assigning through perameter then a new constructor should be declere and new perameter pass through the constructor function with previous perameter; then old perameter pass to super() function and new perameter pass through the constructor of the Inherited class and newProperty assign as newPerameter:
            class ChildClass extends ParentClass{
                constructor(perameter1,perameter2,perameter3,newPerameter){
                    super(perameter1,perameter2,perameter3);
                    this.newProperty = newPerameter;
                }
            }
*/
class technology extends Info{
    constructor (name,id,age,technology){
        super(name,id,age);
        this.technology = technology;
    };
    printTechnology(tech){
        this.details();
        console.log(`=> ${tech} technologies that I learned :\n[${this.technology}]`);
    }
}

const shashiAsDeveloper = new technology('Shashi','C191238',24,['html','css','JavaScript','tailwind','bootstrap','react']);

shashiAsDeveloper.printTechnology('Front-End');
console.log(`____________________`);

const nafisAsDeveloper = new technology('Nafis','C181067',24.5,['react','node.js','mongodb','express']);
nafisAsDeveloper.printTechnology('Full-stack');