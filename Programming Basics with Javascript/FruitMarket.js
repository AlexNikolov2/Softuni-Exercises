function solve(strawberriesPrice, bananasQuantity, orangesQuantity, raspberriesQuantity, strawberriesQuantitty){
    strawberriesPrice = Number(strawberriesPrice)
    bananasQuantity = Number(bananasQuantity)
    orangesQuantity = Number(orangesQuantity)
    raspberriesQuantity = Number(raspberriesQuantity)
    strawberriesQuantitty = Number(strawberriesQuantitty)

    let raspberriesPrice = strawberriesPrice * 0.5
    let orangesPerKilo = raspberriesPrice - (raspberriesPrice * 0.4)
    let bananasPerKilo = raspberriesPrice - (raspberriesPrice * 0.8)
    let raspberriesTotal = raspberriesQuantity * raspberriesPrice
    let orangesTotal = orangesQuantity * orangesPerKilo
    let bananasTotal = bananasQuantity * bananasPerKilo
    let strawberriesTotal = strawberriesQuantitty * strawberriesPrice
    let totalSum = raspberriesTotal + orangesTotal + bananasTotal + strawberriesTotal

    console.log(`Total price is ${totalSum} lv.`)
}

solve(63.5, 3.57, 6.35, 8.15, 2.5)