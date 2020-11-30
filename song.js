function song(input){
    let index = 0
let team = input[index]

while(team !== "gayduk"){
    index++
    console.log(`title goes to ${team}`)

    if(team === "gayduk" ){
        console.log(`Title goes to gayduk, fucking shit...`)
        break
    }
}
}
song(["Dinamo","gayduk"  ])