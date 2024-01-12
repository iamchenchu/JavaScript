
// lenght of the string 
function getLength(str){
    console.log("The originl string is : ",str);
    console.log("The length of the string is : ",str.length);
}

getLength("Hello chenchu how are you?")

// indexOf
function findIndexOf(str, target){

    console.log("Original String is : ", str);
    console.log("The index of the target is : ", str.indexOf(target)); // returns the first index
    console.log("the last index of the string is : ", str.lastIndexOf(target))
}

findIndexOf("Hello chenchu, what are you doing", "chenchu")
findIndexOf("Hey chenchu, what are you doing, ok! by chenchu", "chenchu");