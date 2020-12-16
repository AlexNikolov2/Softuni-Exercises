function solve(arg){
    let num = Number(arg);

    let sum = 0;
    num = num.toString();

    for(let i = 0;i < num.length; i++){
        sum += Number(num.charAt(i))
    }

    console.log(sum)
}
solve(245678)