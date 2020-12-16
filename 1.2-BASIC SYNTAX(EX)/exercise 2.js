function solve(arg0, arg1){
    let n = Number(arg0);
    let precision = Number(arg1);

    if(precision > 15){
        precision = 15
    }
    n = n.toFixed(precision);

    console.log(parseFloat(n))

  
}
solve(10.5,2)