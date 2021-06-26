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