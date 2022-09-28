//let age = 22;
//if (age<18){
//    console.log('you can not smoke sigarite');
//}
///else{
//    console.log("you are able to smoke sigarite");
//}
//function sum();{
    //let myName = 'Amir';
    //if (50 > 19){
        //console.log(myName);

    //}else {
        //console.log('no its not');
    //}
    
    //}
//sum();

//function compere(num1,num2){
//if (num1>num2){
//console.log('num1 is bigger');
//}
//else {
   
// console.log("num2 is bigger");
//}

//}
//compere(20,2);
// function multipliction(num1,num2){
//     console.log(prin     t);


// }
// multipliction(20*4);

// for (let i= 0; i>30; i++) {
//     if (i % 2==1)
//     console.log('the number is' + i + "<br>");
// }

// for (let step = 0; step < 109; step++) {
   
//     console.log('aiwa asra3');
//   }
  
// function happy(){
//     console.log('Iam happy');
// }
// function sad(){
//     console.log('I am sad');
// }
// let score = 80;
// let scorePass = 85;
// if (score<scorePass){
//     sad();
// }else {
//     happy();
// }
// function compere(num1,num2){
//     if (num1>num2){
//         console.log(num1);
//     }
//     else {
//         console.log(num2);
//     }
   

// } compere(48172985615761371234,89275635736423084562378);




// let nums = [[1,2,3],
// [4,5,6,],
// [7,8,9]];


// for(let i = 0; i < nums.length; i++){
//     for( j = 0;j<nums[1].length;j++){
//         console.log(nums[i][j]);
//     }
// }


// for (let i = nums.length -1; i>= 0; i--){
//     console.log(nums.length[i])
//}
// function printStarts(){
// for(i=5;i>=1;i--) {
//     for(j=i;j>=1;j--){
//         console.log(j);
//     }
//         console.log("\n");
// }
// }


// for(let i=1; i<=30; i++){
//     console.log('* '.repeat(i));
//  }

// for(let i=0;i<=30;i+=2){
   
//         console.log(i, 'is an even number');
//     }

// rows = 5
// for i in range(1, rows + 1):
//     for j in range(1, i + 1):
//         print(j, end=' ')
 
// let y = 10;
//             let x = 10;

//             let str = "";

//             for(let i = 1; i < y; i++ ){
//                 for(let j = 1; j < x; j++){
//                     if(i + j >= y){
//                         str = str.concat("*");
//                     }else{
//                         str = str.concat(" ")
//                     }
//                 }
//                 str = str.concat("\n")
//             }

//             console.log(str)
// let a = '';
// let  n = 5;
// let  m = (n-1); 
// for(i=1; i <= n; i++)
// {
//     a = a.trim();
//     a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
//     console.log(a);
//     m--;
// }
// function printEvenNumber(num){
//     for (let i=1; i<= num;i++ ){
//         if (i % 2 == 0){
//             console.log(i,"is an even number");
//         }
//     }
// }
// printEvenNumber(100);



// function printYes(str){
//         if (str.includes ("y")) {
//             console.log('yes');
           
//         } else{
//             console.log('nope');
           
//         }
      
        
    
    
//     }

// printYes("plan ");


// function gradeStudents(score1, score2, score3, score4){
//     let avregeScore = (score1 + score2 +score3 + score4) / 4;
//      if ( avregeScore>90){
//         console.log("Grade A")
//      }else if(avregeScore<70, avregeScore<90 ){
//         console.log('Grade B')
//      }else if (avregeScore<50, avregeScore>70){
//         console.log('Grade C')
//      }else {
//         console.log('Grade F');
//      }
// }
// gradeStudents(90,85,98,88);

let obj1 = {
name: "amir",
};
let obj2 = obj1
obj2.name='mohammad';
console.log(obj2)
obj1.name='amjad';
console.log(obj1);