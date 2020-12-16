function solve(a, b, c){
    a = Number(a)
    c = Number(c)

    let result = 0

    if(b === "+"){
        result = a + c
        console.log(result.toFixed(2))
    }
    else if(b === "-"){
        result = a - c
        console.log(result.toFixed(2))
    }
    else if(b === "*"){
        result = a * c
        console.log(result.toFixed(2))
    }
    else if(b === "/"){
        result = a / c
        console.log(result.toFixed(2))
    }
}