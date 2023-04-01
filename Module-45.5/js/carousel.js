const imgArray = [
    'banner/banner1.png',
    'banner/banner2.png',
    'banner/banner3.png'
]

let index = 0;
const imgEL = document.getElementById('img-slider');
setInterval( () => {
    if(index == imgArray.length){
        index=0;
    }
    else{
        const imgUrl = imgArray[index];
        imgEL.setAttribute('src',imgUrl);
        index++;
    }
},3000)

setInterval(()=>{

}
,2000)