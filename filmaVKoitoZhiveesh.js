function solution(arg1,arg2, arg3) {
    let budget = Number(arg1)
    let people = Number(arg2)
    let clothes = Number(arg3)

    let filmScenery = budget * 0.1
    let expenses = people * clothes

    if (people > 150){
        expenses = expenses * 0.9
    }
    let totalexpenses = (filmScenery + expenses).toFixed(2)

    if(budget >= totalexpenses){
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalexpenses).toFixed(2)} leva left.`)

    }
    else{
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalexpenses - budget).toFixed(2)} leva more.`)
    }
}
solution (342273456, 232, 2632683)