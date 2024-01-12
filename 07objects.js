const personArr = ["chenchu", "ram", "Bheem", "Rajia"]
const genderArr =["male", "male", "male", "female"]

for(let i=0; i<personArr.length; i++){
    if( genderArr[i]== "male"){
        console.log(personArr[i])
    }
}


const Allusers = [{
    name : "chenchu",
    gender : "male" 
},
{
    name : "Bheem",
    gender : "male"
},
{
    name : "Seetha",
    gender : "female"
}]

console.log("Below are the male users : ")

for(let i =0; i<Allusers.length; i++){
    if(Allusers[i]["gender"]=="male"){
        console.log(Allusers[i]["name"])
    }
}

