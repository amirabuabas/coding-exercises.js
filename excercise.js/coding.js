//question 1
// function larger(num1,num2){
//   if(num1>num2){
//     console.log(num1);
//     }else {
//         console.log(num2);
//     }
//   }
// larger(20,3);

//questiion 2
// for (let i = 1; i < 30; i++) {
//   if (i % 2==0){
//       console.log(i);
//   }
// }

//question 3
// let userName = 'mohammad'
// for (let count = 0; count < userName.length; count++) {
//       console.log(userName[count]);
//   }

//question 4


let sortedArray = [1,2,3,4,5,6,7,8,9,10];
function binarySearch(array, target){
    let start = 0;
    let end = array.lenght -1;
   while (start <= end){
     let middle = Math.floor(start+end/2);
     if (array[middle] === target){
        return middle;
     }else if (array[middle] < target){
        return middle;
     }else {
        end = middle -1;
     }
   }
     return -1;   
    
    
}console.log(binarySearch)(sortedArray, 6,"found value at index");