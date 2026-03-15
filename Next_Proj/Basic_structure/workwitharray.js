// map on array
var arr=[1,32,35,65]
var newarr=arr.map(function(val){
    return val+12
})
 console.log(newarr)


 // filter on array
 // used to run on array and return a new array with size greater or equal to the original array
var arrfltr=[1,32,35,65]
var newarrfilter=arrfltr.filter(function(val){
    if(val >32){return true}
})
console.log(newarrfilter)

// find ona array
var arrfind=[2,5,8,67]
const newarrfind=arrfind.find(function(val){
    if (val>5){return val}  //instantly return if it find the value not check other values in the array
})
console.log(newarrfind)

// index of on array
var arrindex=[2,5,8,67]
const newarrindex=arrindex.indexOf(8)
console.log(newarrindex)  // it will return -1 if the value is not found in the array otherwise it will return the index of the value in the array

