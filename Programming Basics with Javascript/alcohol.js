function solution(whiskeyPrice, beerLitre, vineLitre, rakiaLitre, whiskeyLitre){
    whiskeyPrice = Number(whiskeyPrice)
    beerLitre = Number(beerLitre)
    vineLitre = Number(vineLitre)
    rakiaLitre = Number(rakiaLitre)
    whiskeyLitre = Number(whiskeyLitre)

    let rakiaPerLitre = whiskeyPrice /2
    let vinePerLitre = rakiaPerLitre - (rakiaPerLitre * 0.4)
    let beerPerLitre = rakiaPerLitre - (rakiaPerLitre * 0.8)
    let rakiaSum = rakiaPerLitre * rakiaLitre
    let vineSum = vinePerLitre * vineLitre
    let beerSum = beerPerLitre * beerLitre
    let whiskeySum = whiskeyPrice * whiskeyLitre
    let totalSum = rakiaSum + vineSum + beerSum + whiskeySum

    console.log(totalSum.toFixed(2))
}

solution(50, 10, 3.5, 6.5, 1)
