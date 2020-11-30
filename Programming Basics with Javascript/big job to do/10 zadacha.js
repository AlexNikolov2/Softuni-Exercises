function dinamoZagreb(arg){

    let min = 10000000000000000

    for(let i = 1; i <= arg.length; i++){
        let number = Number(arg[i])

        if(number < min){
            min = number
        }
    }
    console.log(min)
}

dinamoZagreb([1, 999])