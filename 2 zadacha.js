function multiply(arg){
    let number = Number(arg)

    for(let i = 1; i <=10; i++){
        let result = i * number
        console.log(`${i} * ${number} = ${result}`)
    }
}
multiply(5)