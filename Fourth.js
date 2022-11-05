let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

let holdCabinet=holdCabinet1.concat(holdCabinet2);
//Concat function doen not affect the Array which is passed

let twoElement_C1 = holdCabinet1.slice(2,4);
let twoElement_C2 = holdCabinet2.slice(1,5);
/*
slice function doen not affect the Array which is passed
Slice has two arguments first is the starting index and 
second is last index but not include that element
*/
 
// console.log(twoElement_C1);
// console.log(twoElement_C2);

holdCabinet1.reverse();
//It affects the first array and it Reverse the array
holdCabinet2.sort();
//It affects the second array and it sort the array
console.log(holdCabinet2)
