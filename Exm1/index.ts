console.log("Hello from the other side. Thanks John");
let x:number = 34;
let y:number = 23;
let result = x + y;

let firstname:string = "John";

let isValid:boolean = true;

let numbers:number[] = [3,4,5,6,6,7];

let students:IStudent[] = [
    {name: "John", age: 23},
    {name: "Jenny", age: 67},
    {name: "Peter", age: 34},
    {age: 12, name: "Olive"}
];

interface IStudent{
    name:string;
    age:number
}

class Student implements IStudent{
    name: string;
    age:number

    constructor(firstname, n){
        this.name = firstname;
        this.age = n;
    }

    printDetails(){
        console.log('Name: ' +this.name +'and age: ' +this.age);
    }
}

let student1 = new Student("Charles", 67);
let student2 = new Student("Charles", 67);