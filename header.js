function show(){
console.log("hello world");

const opt=document.querySelector('.options')
const arr1=document.querySelector('.vector1')
const arr2=document.querySelector('.vector2')
console.log(opt)
if(opt.classList.contains('hidden')){
opt.classList.remove('hidden')
opt.classList.add('flex');
arr1.classList.add('hidden')
arr2.classList.remove('hidden')
}else{
   opt.classList.remove('flex')
   opt.classList.add('hidden'); 
   arr2.classList.add('hidden')
   arr1.classList.remove('hidden')
}
}