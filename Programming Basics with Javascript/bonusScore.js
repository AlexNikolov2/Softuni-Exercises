function solve(arg1, arg2, arg3){
    let firstTime = Number(arg1)
    let secondTime = Number(arg2)
    let thirdTime = Number(arg3)

    let totalTime = firstTime + secondTime + thirdTime

    let minutes = Math.trunc(totalTime / 60)
    let seconds = totalTime % 60

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    }
    else{
        console.log(`${minutes}:${seconds}`)
    }
}
solve(23234, 351132, 364)