const arrays =[10,20,30];
const student = {
    name : 'Abdullah Al Noman',
    class: 7,
    age : 34
}

// 1. Template String 
const age = 'age'
const string =  `My name is ${student.name} . I am reading class ${student['class']}. My age is ${student[age]}`
// console.log(string);

// 2 Arrow Function 

const add = (num1,num2) => num1+num2;
const res = add(10,20);
// console.log(res)
const multipy = (n1,n2,n3) =>{
    const mul = n1*n2*n3 ;
    return mul;
}
const res1 = multipy(1,2,3);
// console.log(res1)

// 3.Spread Operator of Array
const numbers =[10,20,20,300];
const numbers1 = [...numbers];
console.log(numbers1)
numbers.push(100);
console.log(numbers1);
console.log(numbers);