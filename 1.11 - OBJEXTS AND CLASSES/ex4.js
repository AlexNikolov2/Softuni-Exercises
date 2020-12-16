function convertor(name, lastName, hairColor){

    let person = {
        name,
        lastName,
        hairColor
    }
    let asString = JSON.stringify(person)

    console.log(asString)

}
let input = ('George',
'Jones',
'Brown'
)