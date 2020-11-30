function hahaha(input){
    let index = 0
    let data = input[index]
    index++

    let minNumber = Number.MAX_SAFE_INTEGER
    while(data !== "Stop"){
        let currentNumber = Number(data)
        if(currentNumber < minNumber){
            minNumber = currentNumber
        }
        data = input[index]
        index++
    }
    console.log(minNumber)
}
hahaha(["100",
"99",
"80",
"70",
"Stop"])
