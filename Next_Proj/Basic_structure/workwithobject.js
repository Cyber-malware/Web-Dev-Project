
       // object in js
// objects are about key value pairs
var obj={
    name:'malware',
    age:22,
    city:'lahore'   
}
Object.freeze(obj)  // prevent from updating the values
// to access the value of the object we can use dot notation or bracket notation
console.log(obj.name)  // dot notation
console.log(typeof(obj.age))
console.log(typeof(obj['age']))  // bracket notation we use when key comes from variable  

// if we want to access value of object using variable as key then use bracket notation
let key = "age";
console.log(obj[key]);   // works 
console.log(obj.key);    // undefined 


        // function in js
// length of function values and number of parameter called length of function
function malware(a,b,c,d){

}
console.log(malware.length)