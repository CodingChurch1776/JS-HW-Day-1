//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
function findWords(string, list) {
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
    let dog_names = ["Max","HAS","PuRple","dog"]
    for (let i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log(dog_names[i])
            return "Matched dog_name"
        }
        else{
            console.log("No Matches")
        }   
    }
}

//Call method here with parameters
console.log(findWords())

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice, and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEven(arr){
    names = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
    for (let i=0; i < names.length; i++) {
        if (i % 2 == 0){
            names.splice(i,1,'even index')
        }
    }
    return names
}

console.log(replaceEven())

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"

//-------------------------Reworked Code Wars #1:---------------//
//Create a function that takes 2 nonnegative integers in form of a string as an input, and outputs the sum (also as a string)://
//Notes:
//If either input is an empty string, consider it as zero.
//Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
//Example: (Input1, Input2 -->Output)

function sumStrings(a, b){
    const sum = a + b
    let convertsum = `${sum}`
    return convertsum
}   
console.log(sumStrings(4, 5) )

//-------------------------Reworked Code Wars #2:---------------//
//Write a function called repeatStr which repeats the given string string exactly n times.

//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, str1){
    return str1.repeat(n)
}
console.log(repeatStr(7, 'seven is a magic number'))

