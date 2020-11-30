function zad1(arg1, arg2, arg3){
    let kozunakNum = Number(arg1)
    let eggsNum = Number(arg2)
    let curabiiNum = Number(arg3)

    let KozunakPrice = 3.20
    let eggs = 4.35
    let curabii = 5.40
    let eggPaint = 0.15 //per egg

    let totalPrice = (kozunakNum * KozunakPrice) + (eggs * eggsNum) + (curabii * curabiiNum) + (eggsNum * 12 * eggPaint)

    console.log(totalPrice.toFixed(2))
}
zad1(3,2,3)