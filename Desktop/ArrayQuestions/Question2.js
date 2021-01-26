//Write a JavaScript function to get the first element of an array. 
//Passing a parameter 'n' will return the first 'n' elements of the array. 

const button = document.querySelector('button');
const element = document.querySelector('h1');

var newArray = function(firstArray,n){
if(firstArray == null) return 'undefined array';
if(n == null) return firstArray[0];
return firstArray.slice(0,n);
  // var gettingArray = [];

  // if(array.length > 0 && !n ){ 
  //   return array[0]
  // }
  // if(array.length > 0 && n ) {
  //     for(let i = 0; i<array.length; i++){
  //     if(n>i) { 
  //       gettingArray.push(array[i]) 
  //     } 
  //   }
  // } else { 
  //   return 'empty value'
  // }
  // console.log(gettingArray)
  // return gettingArray;
};
button.addEventListener('click', ()=>{
  element.innerText = newArray([ 7, 9, 0, -2],1)
});