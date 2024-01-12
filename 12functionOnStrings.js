
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

//Get string from start to end in a new string
function cutIt(str, startIndex, endIndex){
    console.log("Original String is : ", str)
    let cutString = "";
    for(let i=0; i<str.length; i++){
        if(i>startIndex && i<endIndex){
            cutString += str[i];
        }
    }
    console.log("cut String is : ", cutString);
    return cutString; 
}
cutIt("Hey chenchu how are you ?", 2, 10);


//replace string
function replceString(str, target, replacement){
    console.log("The Original String is : ", str);
    console.log("After the replacement : ", str.replace(target, replacement))
}

replceString("Hey ram how are you, I did not see you coming here!!", "ram", "bheem");

// function split
function splitString(str1, separator){
    console.log("Original String : ", str1);
    console.log("After split : ", str1.split(separator)) // it will form an array
}

splitString("I have issues with you I am not interested to talk to you", " ");

// trim which reduces the unwanted spaces in the given string begenning and at end of the string
function trimString(str){
    console.log("Original String is : ", str);
    console.log("After  the trim : ", str.trim());
}

trimString("         I have 100 rupeees in my hand    ");

// To Uppercase
function upperString(str){
    console.log("Original String is : ", str);
    console.log("After the UpperCase  : ", str.toUpperCase());
}
upperString("ram ram ram, bheem bheem bheem")

// To lowerCase
function lowerString(str){
    console.log("Original String is : ", str);
    console.log("After change to lower : ", str.toLowerCase())
}
lowerString("MY NAME IS RAJA AND I DON'T LIKE THE SWEET KHAJA");

