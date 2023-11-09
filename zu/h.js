// var i=1;
// for(;i<=15;i++){
//  if(i % 3==0 && i % 5==0){
//     console.log('ThreeFive',i)
// }
// else if(i % 5==0){
//     console.log('Five',i); 
// }
// else if( i % 3==0){
//     console.log('Three',i);
// }
// else(
//     console.log(i)
// )
// }

const i = parseFloat(prompt("Insert first number:"));
const i1 = parseFloat(prompt("Insert second number:"));

if (i > i1){
	console.log(i);
} 
else if (i1 > i){
	console.log(i1);
} 
else {
	console.log("iiii");
}