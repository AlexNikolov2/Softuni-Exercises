function destruction(input){

    let index = 0
    let capacity = Number(input[index])
    index++
    let command = input[index]
    index++

    let counter = 0
    let isFreeSpace = true

    while(command !== "End"){
        let suitcases = Number(command)    
        if(counter % 3 == 0){
            suitcases *= 1.1
        }
        capacity -= suitcases
        if(capacity < 0){
            counter--
            console.log("No more space!")
            isFreeSpace = false
            break
        }
        command = input[index]
        index++
        if(command !== "End"){
            counter++
        }

    }
if(isFreeSpace){
    console.log("Congratulations! All suitcases are loaded!")
}
    console.log(`Statistic: ${counter} suitcases loaded.`)

}
destruction(550,
    100,
    252,
    72,
    "End")