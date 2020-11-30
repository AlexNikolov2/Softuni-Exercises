function saatnik(input){
    let index = 0
    let command = input[index]

    let primeSum = 0
    let nonPrimeSum = 0


    while(command !== "stop"){
        let num = Number(command)
        let lastDivider = num - 1
        let isPrime = true
        for(let  i = 2; i <= lastDivider; i++){
            if(num % i === 0){
                nonPrimeSum += 
                isPrime = false
            }
        }
        index++
        command = input[index]
    }
}

saatnik(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
