function solution(tablesNumber, tablesLength, tablesWidth){

    tablesNumber = Number(tablesNumber)
    tablesLength = Number(tablesLength)
    tablesWidth = Number(tablesWidth)

    let totalArea = tablesNumber * (tablesLength + 2 * 0.3) * (tablesWidth + 2 * 0.3)
    let rackArea = tablesNumber * (tablesLength / 2) * (tablesLength / 2)
    let priceUSD = (totalArea * 7) + (rackArea * 9)
    let priceBGN = priceUSD * 1.85

    console.log(`${priceUSD.toFixed(2)} USD.`)
    console.log(`${priceBGN.toFixed(2)} BGN.`)
}

solution(5, 1.00, 0.50)
