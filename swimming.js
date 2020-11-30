function solution(arg1, arg2, arg3){
    let recordTime = Number(arg1)
    let meters = Number(arg2)
    let timePerMeter = Number(arg3)

    let resistence = Math.floor(meters / 15) * 12.5
    let totalTime = (meters * timePerMeter) + resistence

    if(totalTime < recordTime){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
    else {
        console.log(`No, he failed! He was ${(totalTime - recordTime).toFixed(2)} seconds slower.`)
    }
}

solution(1324213, 3463, 575)