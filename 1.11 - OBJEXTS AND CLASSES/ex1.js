function info(firstName, lastName, age){
    let person = {};
    person.firstName = firstName
    person.lastName = lastName
    person.age = age

    return person
}

let result = info("Peter", 
"Pan",
"20"
)
console.log(result)