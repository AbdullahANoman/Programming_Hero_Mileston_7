

let num = 0;
const container = document.getElementById('container');
const start = ()=>{
    num=0
    var startId = setInterval(()=>{ 
        container.innerHTML =`
        ${num++}
        `
    },1000)
    
}
const stop = () =>{
    container.innerText = 0
    start()
}
const reset = () =>{
    container.innerHTML = `0`
    const resetId = setTimeout(()=>{
        num=0;
        
    })
    
}