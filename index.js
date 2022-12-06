let card1No=11;
let card2no=11;

let sumOfCards = card1No + card2no;
let hasBlackJack = false;
let isAlive = true;
let message= "";


if(sumOfCards === 21){
    hasBlackJack= true;
    message = "Take new card"
}else if(sumOfCards<= 20){
    message = "Have BlackJack"
}else{
    isAlive= false;
    message = "Out of the game"
}

console.log(message)

const sum = {
    base:1,
    addOne: function(a){
        let f= v => v+ this.base;
        return f(a)
    },
    addAgain: function(a){
        let f = function(v){ return v+this.base};
        return f.apply({base:13},[a])
    }
}
const addOneData = sum.addOne(10)
const addAgainData = sum.addAgain(12)

console.log("addOne", addOneData)
console.log("addAgainData", addAgainData)

// const abc = function(a){ return `Hello ${a}`};
// const result = abc("pooja")

// console.log(result)

let args = ['Prashant', 'Yadav', 'Golu'];
const abc = (...args)=> args[0];
console.log(abc(...args));
//undefined

function store(num = add(1), b = [], c={}){
    b.push(num);
    c[num]= b;
    return c;
}

const add = n => n+1;

console.log(store()[2])

function test(inp){
    console.log(inp === arguments[0]);
    inp = 'different';
    console.log(inp === arguments[0]);
}

test()

let name = 'Prashant Yadav';
 let age = 23;
 let nationality = 'Indian';
 let designation = 'Software Engineer';

var user = {
    name,
    age,
    nationality,
    designation,
    detail:() =>`${name} is an ${nationality}, working as ${designation}`
 }
console.log(user.detail());

function employee(name, age){
    this.name = name;
    this.age = age;
}

employee.prototype.details = function(){
    return this.name + "having" + this.age;
}

const employeeInfo = new employee("pooja", 24);

function employer(name, age,city){
    employee.call(this, name, age)
    employee.prototype.detail(this)
    this.city = city
}

employer.prototype.getInfo = function(){
    return this.name+ " lived in "+ this.city
}
Object.setPrototypeOf(employer,employee.prototype)


const employerInfo = new employer("pooja", 24,"canada");
console.log(employerInfo.name, employeeInfo.age, employerInfo.getInfo(), employerInfo.details())

