function destoyThePussy(arg1){

    let inputNumber = Number(arg1)

    let result = 1

    for(let number = 2; number <= inputNumber; number++){
        result = result * number
    }
    console.log(result)
}
destoyThePussy(5)