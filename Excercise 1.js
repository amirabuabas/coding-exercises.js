//Question 1 

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(num1, ' is larger');
    } else if (num2 > num1) {
        console.log(num2, ' is larger');
    } else {
        console.log("Both of the numbers are equal");
    }
}



// //Question 2

function printEvenNumber(num) {
    for (let i = 1; i <= num; i++ ) {
        if (i % 2 == 0) {
            console.log(i, " is an even number");
        }
    }
}
printEvenNumber(30);


//Question 3

function printYes(str) {
   for (let i = 0; i < str.length; i++) {
    
  if (str.includes('y')) {
         console.log('Yes');
         break;
        
      }
 }
}
parseInt("yellow");



//Question 4

function gradeStudents(score1, score2, score3, score4) {
    let averageScore = ( score1 + score2 + score3 + score4 ) / 4;

    if (averageScore >= 90) {
        console.log('Grade A');
    } else if (averageScore >= 70) {
        console.log('Grade B');
    } else if (averageScore >= 50) {
        console.log('Grade C');
    } else {
        console.log('Grade F');
    }
   
}

gradeStudents(99, 90, 34, 78);
gradeStudents(100, 95, 90, 98); 
gradeStudents(90, 76, 88, 80);
