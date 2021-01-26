//Write a JavaScript function to get the last element of an array. 
//Passing a parameter 'n' will return the last 'n' elements of the array. 

const button = document.querySelector('button');
const element = document.querySelector('h1');

var lastElement = function(array,n){
  var takingArray = [];
  if(array.length > 0 && !n){
    return array[array.length-1]

  }
  if(array.length > 0 && n ){
    var j=0;
    for(let i = array.length-1; i>=0; i--){
      if(n>j){
        takingArray.push(array[i]) 
      }
      j++
    }
  }
    else { 
    return 'empty value'
  }
  console.log(takingArray)
  return takingArray;
}
button.addEventListener('click', ()=>{
  element.innerText = lastElement([ 7, 9, 0, -2],3)
});


// var result = function(lastArray, n){
//   if(lastArray == null) return 'undefined array';
//   if(n == null) return lastArray[lastArray.length-1];
//   return lastArray.slice(Math.max(lastArray.length-n,0));
// }
// button.addEventListener('click', ()=>{
//   element.innerText = result([ 7, 9, 0, -2],6)
// })
