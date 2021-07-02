function displayName () {
    return 'My name is Sirajuddeen'
}

const displayMyName = () => 'My name is Siraj '

var arrow = () => 1 ; 

console.log(arrow())

console.log(displayMyName())
console.log(displayName()) 

/**
 * Call back use case for Fat arrow function . 
 */


const myLearning = [{courseName:'Js fundamentals', isCompleted:true},{courseName:'React js fundamentals', isCompleted:true},{courseName:'App Guide Installation',isCompleted:false}]


console.log(myLearning.filter((myLearning) => myLearning.isCompleted === true ))


/**
 * Time out function 
 */

setTimeout(() => {
    console.log("Call me after two seconds ")
}, 2000);

/**
 * Template literals  and String interpolation 
 */
 var lastName = ' am an Engineeer \n I am a guy '
var addition = `The addition of these two numbers are   ${5+10}`




console.log(myName + lastName )
console.log(myName.concat(lastName))
console.log(addition)
