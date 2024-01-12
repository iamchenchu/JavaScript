
// lenght of the string 
function getLength(str){
    console.log("The originl string is : ",str);
    console.log("The length of the string is : ",str.length);
}

getLength("Hello chenchu how are you?")

// indexOf
function findIndexOf(str, target){

    console.log("Original String is : ", str);
    console.log("The index of the target is : ", str.indexOf(target)); // returns the first index of the target
    console.log("the last index of the string is : ", str.lastIndexOf(target)) // retunr the last index if the target 
}
findIndexOf("Hello chenchu, what are you doing", "chenchu")
findIndexOf("Hey chenchu, what are you doing, ok! by chenchu", "chenchu");


//get slice
function getSlice(str, start, end){
    console.log("Original Sting : ", str)
    console.log(str.substr(start, end)); // end is the length of the substring from index start
    console.log(str.slice(start,end)); // from 2nd index to 5th index chars will be printed
}
getSlice("I love programming since my childhood", 3, 13)

