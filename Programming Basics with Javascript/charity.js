function solution(days, pastryChefs, cakes, gofrettes, pancakes){
    days = Number(days)
    pastryChefs = Number(pastryChefs)
    cakes = Number(cakes)
    gofrettes = Number(gofrettes)
    pancakes = Number(pancakes)

    let cakeSum = cakes * 45
    let gofretteSum = gofrettes * 5.8
    let pancakeSum = pancakes * 3.2
    let sumPerDay = (cakeSum + gofretteSum + pancakeSum) * pastryChefs
    let totalSum = sumPerDay * days
    let totalRevenue = totalSum - (totalSum * 1/8)

    console.log(totalRevenue.toFixed(2)) 
}

solution(23, 8, 14, 30, 16)