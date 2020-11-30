function kalkulatora(arg1, arg2, arg3){
    let numberOne = Number(arg1)
    let numberTwo = Number(arg2)
    let operator = arg3
    let evenOdd = ""
    let result = 0

    switch(operator){
        case "+" : result = numberOne + numberTwo
        if(result % 2 === 0){
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
        console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOdd}`)
        break
        case "-" : result = numberOne - numberTwo
        if(result % 2 === 0){
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
        console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOdd}`)
        break
        case "*" : result = numberOne * numberTwo 
        if(result % 2 === 0){
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
        console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOdd}`)
        break
        case "/" : result = numberOne / numberTwo
        if(numberTwo === 0){
            console.log(`Cannot divide ${numberOne} by zero`)
        }
        else{
            console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`)
        }
        break
        case "%" : result = numberOne ;"%"; numberTwo
        if(numberTwo === 0){
            console.log(`Cannot divide ${numberOne} by zero`)
        }
        else{
            console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`)
        
    }
    break 
    }
}   
kalkulatora("10",
"3",
"%")
