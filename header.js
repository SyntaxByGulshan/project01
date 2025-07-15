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
function clientShow1(){
   const point=document.querySelector('.point')
   const point1=point.querySelector('#point1')
   const point2=point.querySelector('#point2')
   const point3=point.querySelector('#point3')

   point1.className('border-blue-900 border-blue-900 rounded-full')
   point2.className('border-blue-500 border-blue-900 rounded-full')
   point3.className('border-blue-500 border-blue-900 rounded-full')
}

