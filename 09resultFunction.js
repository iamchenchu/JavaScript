function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : "+ data);
}

function displayResultPassive(data){
    console.log("Sum's result is : "+ data);
}


const ans = sum(3, 2, displayResult);
const ans11 = sum(3, 2, displayResultPassive);

//displayResult(ans); 



