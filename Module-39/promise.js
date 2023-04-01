const getData = new Promise ((resolve,reject)=>{
    // 
    const num = Math.random()*10;
    console.log(num);
    if(num<5){
        resolve(5665);
    }
    reject('No data available')
})

// console.log(getData)
function getFetch1(url){
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch (err => console.log('Error Message'))
}
async function getFetch2(url){
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log('Error from 2')
    }
}
getFetch1('Noman')
getFetch2('Noman4')
getData
    .then(data => console.log(data))
    .catch(ERR => console.error('Err :' , ERR))