function komunist(arg1, arg2, arg3){
    let budget = Number(arg1)
    let season = arg2
    let fishermans = Number(arg3)

    let rentPrice = 0

    if( season === "Spring"){
        rentPrice += 3000
    }
    else if(season === "Summer" || season === "Autumn"){
        rentPrice += 4200
    }
    else if(season === "Winter"){
        rentPrice += 2600
    }

    if(fishermans <= 6){
        rentPrice *= 0.90
    }
    else if(fishermans > 6 && fishermans <= 11){
        rentPrice *= 0.85
    }
    else{
        rentPrice *= 0.75
    }

    if((fishermans % 2 === 0) && (season !== "Autumn")){
        rentPrice *= 0.95
    }

    if(budget >= rentPrice){
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`)
    }
}   
    komunist("3000",
"Summer",
"11")