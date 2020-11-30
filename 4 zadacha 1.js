function destruction(input){
    let index = 0
    let steps = 0
    let target = 10000

    let nextSteps = input[index]

    while(nextSteps !== "Going home" && nextSteps !== undefined){
        steps += Number(nextSteps)

        index++
        nextSteps = input[index]
    }

    if(nextSteps === "Going home"){
        steps += Number(input[index + 1])
    }

    if(steps >= target){
        let remainder = steps - target
        console.log (`Goal reached! Good job!`)
        console.log(`${remainder} steps over the goal!`)


    }
    else{
        let stepsNeeded = target - steps
        console.log(`${stepsNeeded} to reach goal.`)
    }

}
destruction(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
