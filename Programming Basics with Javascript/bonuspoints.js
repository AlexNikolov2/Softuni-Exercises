function bonus(arg1){

    let initialNumber = Number(arg1)
    let bonusPoints = 0

    if(initialNumber > 1000){
        bonusPoints += initialNumber * 0.10
    }
    else if(initialNumber > 100){
        bonusPoints += initialNumber * 0.20
    }
    else if(initialNumber <= 100) {
        bonusPoints += 5
    }

    if((initialNumber % 2) === 0) {
        bonusPoints += 1
    }
    else (initialNumber > 1000) ;{
        let lastDigit = initialNumber % 10
    

        if ((lastDigit === 5)) {
                bonusPoints = bonusPoints += 2
        }
        console.log(bonusPoints)
        console.log(bonusPoints + initialNumber)
    }
}
bonus(8241684)