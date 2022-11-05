let people = ["Greg","Mary","Devon","James"];
//10
people.splice(2,1,"Elizabeth","Artie");
console.log(people)
//11
let withBob = people.concat("Bob");
console.log(withBob)

//1
for(var i=0;i<people.length;i++)
    console.log(people[i]);
//2
people.shift();
//3
people.pop();
//4
people.unshift("Matt");
//5
people.push("Saran");
//6
for(var i=0;i<people.length;i++){
    if(people[i]=="Mary"){
        console.log(people[i]);
        break;
    }
    else{
        console.log(people[i]);
    }
}
//7
let updatedPeople = people.slice(2,people.length);
//8
console.log(people.indexOf("Mary"));//2
//9
console.log(people.indexOf("Foo"));//-1

