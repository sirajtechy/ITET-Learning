// Destructuring in JS 

let userDetails = ['Siraj',30,'Full Stack Developer']

let [name,age,role] = userDetails

let userDetails = {
    name : 'Siraj',
    age : 30 ,
    role : 'Full Stack developer '
}

let {name , age,role} = userDetails
console.log(name,age,role)

var {booom} = undefined ;
console.log(booom)