function zadachaTri(input){

    let neededMoney = Number(input[0])
    let savedMoney = Number(input[1])
    let spendDays = 0

    let index = 2

    let days = 0
    let action = input[index]

    while(spendDays < 5 && savedMoney < neededMoney){
        let actionMoney = Number(input[index + 1])

        if(action === "spend"){
            spendDays++
            savedMoney = Math.max(0, (savedMoney - actionMoney))
        }
        else if(action === "save"){
            savedMoney += actionMoney
            spendDays = 0
        }
        days++
        index += 2

        action = input[index]
    }
    if(savedMoney >= neededMoney){
        console.log(`You saved the money for ${days} days.`)
    }
    else{
        console.log(`You can't save the money.`)
        console.log(`${days}`)
    }

}
zadachaTri(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
