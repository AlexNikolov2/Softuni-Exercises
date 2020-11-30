function shirokaPutka(arg1, arg2, arg3){
    let age = Number(arg1)
    let laundryPrice = Number(arg2)
    let toyPrice = Number(arg3)

    let piggyBank = 0
    let toysCount = 0
    let lastCashGift = 0

 for(let birthday = 1; birthday <= age; birthday++){
    if(birthday % 2 !== 0){
        toysCount += 1
    }
    else{
        piggyBank += lastCashGift + 9
        lastCashGift += 10
    }
 }
 piggyBank += (toysCount * toyPrice)

 if(piggyBank  >= laundryPrice){
     let reminder = piggyBank - laundryPrice
     console.log(`Yes! ${reminder.toFixed(2)}`)
 }
 else{
     let needed = laundryPrice - piggyBank
     console.log(`No! ${needed.toFixed(2)}`)
 }
}
shirokaPutka(10, 170, 6)