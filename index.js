// let page1;
// let page2;
// let summa;
// page1=15;
// page2=20;
// summa=page1 + page2;
// console.log(summa)

//function sei(name){
//let hello;
//hello="привет";
//console.log(hello, name);}

//sei("а")
//sei("б")
//sei("в")

let image = document.querySelector(".viewer__image");
image.src = "./img/002.jpg"
console.log(image)

let link1 = document.querySelector(".link1")
console.log(link1)
let link2 = document.querySelector(".link2")
console.log(link2)
let link3 = document.querySelector(".link3")
console.log(link3)
let link4 = document.querySelector(".link4")
console.log(link4)

link1.addEventListener("click",function(){
    image.src ="./img/001.jpg"
}) 
    link2.addEventListener("click",function(){
    image.src ="./img/002.jpg"
})

link3.addEventListener("click",function(){
    image.src ="./img/003.jpg"
})

link4.addEventListener("click",function(){
    image.src ="./img/004.jpg"
})
