const myArray=[7,1,2,3,4]
console.log(myArray[0]);
myArray.push(8)
console.log(myArray);
myArray.pop()
console.log(myArray)
myArray.unshift(0)
myArray.shift()

//slice & splice
//in slice a copy of range is printed and last element is not included
//in splice the origonal arr changes and whole region is taken out and printed