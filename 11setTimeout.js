function greet(){
    console.log("Hello there!! How are you ?")
}

function greetAlien(){
    console.log("Hello Alien !!");
}

setTimeout(greet, 3 * 1000) // wait for 3 seconds and then print the code 

setTimeout(greet, 10 * 1000) // will wait for 10 seconds and then print the code