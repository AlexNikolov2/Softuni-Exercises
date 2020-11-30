function solve(arg1, arg2, arg3, arg4, arg5, arg6){
    let excursionPrice = Number(arg1)
    let puzzleCut = Number(arg2)
    let talkingDollCnt = Number(arg3)
    let teddyBearCnt= Number(arg4)
    let minionCnt = Number(arg5)
    let truckCnt = Number(arg6)

    let puzzlePrice = puzzleCut * 2.6
    let talkingDollPrice = talkingDollCnt * 3
    let teddyBearPrice = teddyBearCnt * 4.1
    let minionPrice = minionCnt * 8.2
    let truckPrice = truckCnt * 2

    let totalPrice = puzzlePrice + talkingDollPrice + teddyBearPrice + minionPrice + truckPrice
    let totalToysCnt = puzzleCut + talkingDollsCnt + teddyBearCnt + minionCnt + truckCnt

    if (totalToysCnt >=25){
        totalPriceAfter = totalPrice * 0.75
    }
    
    let finalPrice = totalPriceAfter * 0.9

    if (finalPrice >= excursionPrice)
    let moneyLeft = finalPrice - excursionPrice 
        console.log (`Yes! ${moneyLeft.toFixed(2)} lv left. `);
    }
        {
        let moneyNeed = excursionPrice - finalPrice
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} needed.`)
    }
