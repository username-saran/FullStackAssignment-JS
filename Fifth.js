let str = 'In space, no one can hear you code.';
//a
let arrayOfString1 = str.split();
 console.log(arrayOfString1) //->['In space, no one can hear you code.']
let arrayOfString2 = str.split('e');
console.log(arrayOfString2)//->['In spac', ', no on', ' can h', 'ar you cod', '.']
let arrayOfString3 = str.split(' ');//->['In', 'space,', 'no', 'one', 'can', 'hear', 'you''code.']
console.log(arrayOfString3)
let arrayOfString4 = str.split('');//->['I', 'n', ' ', 's', 'p', 'a', 'c', 'e', ',', ' ', 'n', 'o', ' ', 'o', 'n', 'e', ' ', 'c', 'a', 'n', ' ', 'h', 'e', 'a', 'r', ' ', 'y', 'o', 'u', ' ', 'c', 'o', 'd', 'e', '.']
console.log(arrayOfString4)

/* 
Given the array arr = ['B', 'n', 'n', 5], see what happens when you print arr.join() vs. arr.join('a') vs. arr.join(' ') vs. arr.join(''). What is the purpose of the parameter inside the ()?
 */
//b
let arr = ['B', 'n', 'n', 5]
console.log(arr.join());//Convert into String -> B,n,n,5

console.log(arr.join('a'));//Banana5a

console.log(arr.join(" "));//  B n n 5

console.log(arr.join(''));//Bnn5

//c
// No it doesn't change the original string and Array

//d
let string = "water,space suits,food,plasma sword,batteries"
let stringArray = string.split(",");
console.log(stringArray.sort());
console.log(stringArray.join(','));
