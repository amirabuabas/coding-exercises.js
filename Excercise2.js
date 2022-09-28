//Question 1

function printOddNumbers(n) {
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 1) {
        console.log(i, "Odd Number");
      }
    }
  }
  
  printOddNumbers(20);
  printOddNumbers(100);



  //Question 2

let numList = [1, 2, 3, 4, 5, 6]; 
function sumOfElements(array) {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}console.log(sumOfElements(numList));


//Question 3



let numbersList = [ 20, 40, -10, 5, 40, 5, 11]; 
    let max = array[0];{
    for (let i = 1 ; i < array.length ; i++) {
        if (array[i] > max) { 
            max = array[i];
        }
    }

    return max;
}
let largestValue = largestNumber(numbersList);

console.log(largestValue);

largestNumber(numList);
