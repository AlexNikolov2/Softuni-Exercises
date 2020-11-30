function solution(arg1, arg2, arg3){
    let recordTime = Number(arg1)
    let meters = Number(arg2)
    let timePerMeter = Number(arg3)

    let resistence = Math.floor(meters / 50) * 30
    let totalTime = (meters * timePerMeter) + resistence

    if(totalTime < recordTime){
        console.log(`Yes! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
    else {
        console.log(`No! He was ${(totalTime - recordTime).toFixed(2)} seconds slower.`)
    }
}
solution(10164,
1400,
25)
