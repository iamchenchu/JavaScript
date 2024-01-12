const arr = [12, 14, 11, 198, 45, 63, 86]

let biggestNum = 0

for(let i=0; i<arr.length; i++){

    if(arr[i] > biggestNum){
        biggestNum = arr[i]
    }
}

console.log(biggestNum)