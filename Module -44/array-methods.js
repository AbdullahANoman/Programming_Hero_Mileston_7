const products = [
    {name: 'Laptop', price:10000, brand:'Samsung', Country:'Usa' },
    {name: 'Mobile', price:8000, brand:'HTC', Country:'UK' },
    {name: 'Camera', price:15000, brand:'Canon', Country:'Dubai' },
    {name: 'Sunglass', price:1000, brand:'Ray', Country:'Australia' }
]


 // 1. Array Map 

 products.map(product => console.log(product))


const country1 = products.map(x=>{
    const nameCountry = 'My country name is ' + x.Country;
    return nameCountry
})
const numbers = [10,20,30];
const result = numbers.map(number=> number)
// console.log(result)
// console.log(country)
// console.log(country1)

// 2. Array forEach 
products.forEach(x=> console.log(x.brand))

const result4 = numbers.filter(number => number<5)
console.log(result4)