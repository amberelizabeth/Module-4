console.log("Hello from the other side. Thanks John");
var x = 34;
var y = 23;
var result = x + y;
var firstname = "John";
var isValid = true;
var numbers = [3, 4, 5, 6, 6, 7];
var students = [
    { name: "John", age: 23 },
    { name: "Jenny", age: 67 },
    { name: "Peter", age: 34 },
    { age: 12, name: "Olive" }
];
var Student = /** @class */ (function () {
    function Student(firstname, n) {
        this.name = firstname;
        this.age = n;
    }
    Student.prototype.printDetails = function () {
        console.log('Name: ' + this.name + 'and age: ' + this.age);
    };
    return Student;
}());
var student1 = new Student("Charles", 67);
var student2 = new Student("Charles", 67);
